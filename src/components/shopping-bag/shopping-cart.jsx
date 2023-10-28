import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clear_cart, decrease_quantity, remove_cart_product } from '@/src/redux/features/cart/cartSlice';
import useCartInfo from "@/src/hooks/use-cart-info";

const ShoppingCart = () => {
  const productItem = useSelector((state) => state.cart.cart); 
  const dispatch = useDispatch()
  const {total} = useCartInfo()
  const handleSubmit = e => e.preventDefault();

  return (
    <>
      <div className="row">
        <div className="col-9">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="table-content table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Images</th>
                    <th className="cart-product-name">Product</th>
                    <th className="product-price">Unit Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-remove">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {productItem.map((item, i) => (
                    <tr key={i}>
                      <td className="product-thumbnail shopping_img">
                        <Image src={item.img} alt="theme-pure" />
                      </td>
                      <td className="product-name">
                        <a href="#">{item.title}</a>
                      </td>
                      <td className="product-price">
                        <span className="amount">${item.price}</span>
                      </td>
                      <td className="product-quantity">
                         <div className="cart-plus-minus">
                            <input type="text" onChange={handleSubmit} value={item.quantity} />
                            <div className="dec qtybutton" onClick={() => dispatch(decrease_quantity(item))}> - </div>
                            <div className="inc qtybutton" onClick={() => dispatch(addToCart(item))}>+</div>
                        </div> 
                      </td>
                      <td className="product-remove">
                        <a href="#">
                          <i className="fa fa-times" onClick={() => dispatch(remove_cart_product(item))}></i>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </form>

          <div className="row">
            <div className="col-12">
              <div className="coupon-all"> 
                <div className="coupon2">
                  <button onClick={() => dispatch(clear_cart())} className="btn-clear" 
                  name="update_cart" type="button">Clear cart</button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="col-3">
        <div className="cart-page-total">
            <h6>Cart totals</h6>
            <ul className="mb-20">
                <li>Subtotal <span>${total} </span></li>
                <li>Total <span>$ {total} </span></li>
            </ul>
            <Link href={'/checkout'}> 
                <button className="btn-checkout">Proceed to checkout</button>
            </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
