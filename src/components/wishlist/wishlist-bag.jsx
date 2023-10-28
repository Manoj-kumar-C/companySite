import Image from 'next/image'; 
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/src/redux/features/cart/cartSlice';
import { remove_wishlist_product } from '@/src/redux/features/wishlist/wishlistSlice';
import Link from 'next/link';

const WishlistBag = () => {
    const productItem = useSelector((state) => state.wishlist.wishlist); 
    const dispatch = useDispatch();

    return (
        <>
     <div className="row">
        <div className="col-12">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="table-content table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Images</th>
                    <th className="cart-product-name">Product</th>
                    <th className="product-price">Unit Price</th>
                    <th className="product-quantity">Action</th>
                    <th className="product-remove">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {productItem.map((item, i) => (
                    <tr key={i}>
                      <td className="product-thumbnail shopping_img">
                        <Image src={item.img} alt="theme-pure" />
                      </td>
                      <td className="product-name text-start">
                        <a href="#">{item.title}</a>
                      </td>
                      <td className="product-price">
                        <span className="amount">${item.price}</span>
                      </td>
                      <td className="product-quantity"> 
                        <button className="btn-cart" type="submit" onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
                      </td>
                      <td className="product-remove">                        
                          <i className="fa fa-times" style={{cursor: "pointer"}} onClick={() => dispatch(remove_wishlist_product(item))}></i> 
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </form>
        </div>
        <div className="col-12">
          <div className="go_cart_btn my-3">
            <Link href={"/shopping-bag"}>
                <button>Go To Cart</button>
            </Link>
          </div>
        </div>
      </div>
        </>
    );
};

export default WishlistBag;