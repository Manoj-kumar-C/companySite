import { useSelector } from "react-redux"; 
import Link from "next/link";
import WishlistBag from "./wishlist-bag";

const WishlistArea = () => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const productItem = useSelector((state) => state.wishlist.wishlist);

  let content = null;
  if (productItem.length === 0)  {
   content = <div className="text-center">
         <h6>No Wishlist Items Found</h6>
         <Link href={"/shop"}><button className="wishlist-btn">Continue Shipping</button></Link>
       </div>
  }
  if (productItem.length > 0) content = <WishlistBag />;

  return (
    <>
      <section className="wishlist-area pt-80 pb-80">
        <div className="container">{content}</div>
      </section>
    </>
  );
};

export default WishlistArea;
