
const CouponForm = () => {
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <p className="checkout-coupon">
                    <input type="text" placeholder="Coupon Code" />
                    <button className="btn-cart" type="submit">Apply Coupon</button>
                </p>
            </form>
        </>
    );
};

export default CouponForm;