import { useSelector } from "react-redux";
import ShoppingCart from "./shopping-cart";
import EmptyBag from "./empty-bag";

const ShoppingBagArea = () => {
  const productItem = useSelector((state) => state.cart.cart);

  let content = null;
  if (productItem.length === 0) content = <EmptyBag />
  if (productItem.length > 0) content = <ShoppingCart />;

  return (
    <>
      <section className="wishlist-area pt-80 pb-80">
        <div className="container">{content}</div>
      </section>
    </>
  );
};

export default ShoppingBagArea;
