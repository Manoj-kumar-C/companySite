import Link from "next/link";
import Image from "next/image";
import empty_bag from "../../../public/assets/img/shop/cart/empty-cart.webp";

const EmptyBag = () => {
  return (
    <>
      <div className="empty_bag">
        <Image src={empty_bag} alt="empty-bag" />
        <h5 className="py-3">Your Bag is Empty</h5>
        <Link href={"/shop"}>
            <button className="btn-cart">Go To Shop</button>
        </Link>
      </div>
    </>
  );
};

export default EmptyBag;
