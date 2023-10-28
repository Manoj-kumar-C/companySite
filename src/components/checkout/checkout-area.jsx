import React, { useState } from 'react';
import CouponForm from '../forms/coupon-form';
import useCartInfo from '@/src/hooks/use-cart-info';
import CheckoutLogin from '../forms/checkout-login';

const  accordion_data = [
    {
        id: 1,
        question: "Direct Bank Transfer?",
        answer: <>Make your payment directly into our bank account. Please use your Order ID
        as the payment
        reference. Your order won’t be
        shipped until the funds have cleared in our account.</>,    
        accordion_id: "One",
        collapsed: "", 
        aria_expanded: true, 
        show: "show"
    },
    {
        id: 2,
        question: "Cheque Payment ?",
        answer: <>Please send your cheque to Store Name, Store Street, Store Town, Store
        State / County, Store
        Postcode.</>,    
        accordion_id: "Two",
        collapsed: "collapsed", 
        aria_expanded: false, 
        show: ""
    },
    {
        id: 3,
        question: "PayPal ?",
        answer: <>Pay via PayPal; you can pay with your credit card if you don’t have a
        PayPal account.</>,    
        accordion_id: "Three",
        collapsed: "collapsed", 
        aria_expanded: false, 
        show: ""
    }
]

const CheckoutArea = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isCodeOpen, setIsCodeOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const [isShipOpen, setIsShipOpen] = useState(false);
    const {total} = useCartInfo()
  
    return (
        <>
            <section className="coupon-area pt-100 pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="coupon-accordion">
                                {/* <!-- ACCORDION START --> */}
                                <h3>Returning customer? <span id="showlogin" onClick={() => setIsLoginOpen(!isLoginOpen)}>Click here to login</span></h3>
                                {isLoginOpen &&
                                    <div id="checkout-login" className={`coupon-content ${isLoginOpen ? "d-block" : ""}`}>
                                        <div className="coupon-info">
                                            <p className="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est
                                                sit amet ipsum luctus.</p>
                                                <CheckoutLogin /> 
                                        </div>
                                    </div>                                 
                                }
                                {/* <!-- ACCORDION END --> */}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="coupon-accordion">
                                {/* <!-- ACCORDION START --> */}
                                <h3>Have a coupon? <span id="showcoupon" onClick={() => setIsCodeOpen(!isCodeOpen)}>Click here to enter your code</span></h3>
                                {isCodeOpen && 
                                    <div id="checkout_coupon" className={`coupon-checkout-content ${isCodeOpen ? "d-block" : "none"}`}>
                                        <div className="coupon-info">
                                            <CouponForm /> 
                                        </div>
                                    </div>
                                }
                                {/* <!-- ACCORDION END --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="checkout-area pb-70">
                <div className="container">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="row">

                            <div className="col-lg-6">
                                <div className="checkbox-form">
                                    <h3>Billing Details</h3>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="country-select">
                                                <label>Country <span className="required">*</span></label>
                                                <select>
                                                    <option value="volvo">Bangladesh</option>
                                                    <option value="saab">Algeria</option>
                                                    <option value="mercedes">Afghanistan</option>
                                                    <option value="audi">Ghana</option>
                                                    <option value="audi2">Albania</option>
                                                    <option value="audi3">Bahrain</option>
                                                    <option value="audi4">Colombia</option>
                                                    <option value="audi5">Dominican Republic</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>First Name <span className="required">*</span></label>
                                                <input type="text" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Last Name <span className="required">*</span></label>
                                                <input type="text" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <label>Company Name</label>
                                                <input type="text" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <label>Address <span className="required">*</span></label>
                                                <input type="text" placeholder="Street address" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list">
                                                <label>Town / City <span className="required">*</span></label>
                                                <input type="text" placeholder="Town / City" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>State / County <span className="required">*</span></label>
                                                <input type="text" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Postcode / Zip <span className="required">*</span></label>
                                                <input type="text" placeholder="Postcode / Zip" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Email Address <span className="required">*</span></label>
                                                <input type="email" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="checkout-form-list">
                                                <label>Phone <span className="required">*</span></label>
                                                <input type="text" placeholder="Postcode / Zip" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="checkout-form-list create-acc">
                                                <input id="cbox" type="checkbox" onClick={() => setIsOpen(!isOpen)} />
                                                <label htmlFor='cbox'>Create an account?</label>
                                            </div>
                                            {isOpen && 
                                                <div id="cbox_info" className={`checkout-form-list create-account ${isOpen ? "d-block" : "none"}`}>
                                                    <p>Create an account by entering the information below. If you are a returning
                                                        customer please login at the top of the page.</p>
                                                    <label>Account password <span className="required">*</span></label>
                                                    <input type="password" placeholder="password" />
                                                </div>                                            
                                            }
                                        </div>
                                    </div>
                                    <div className="different-address">
                                        <div className="ship-different-title">
                                            <h3>
                                                <label htmlFor="ship-box" >Ship to a different address?</label>
                                                <input onClick={() => setIsShipOpen(!isShipOpen)} id="ship-box" type="checkbox" />
                                            </h3>
                                        </div>
                                        {isShipOpen && 
                                            <div id="ship-box-info" className={`${isShipOpen ? "d-block" : "none"}`}>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="country-select">
                                                            <label>Country <span className="required">*</span></label>
                                                            <select>
                                                                <option value="volvo">bangladesh</option>
                                                                <option value="saab">Algeria</option>
                                                                <option value="mercedes">Afghanistan</option>
                                                                <option value="audi">Ghana</option>
                                                                <option value="audi2">Albania</option>
                                                                <option value="audi3">Bahrain</option>
                                                                <option value="audi4">Colombia</option>
                                                                <option value="audi5">Dominican Republic</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkout-form-list">
                                                            <label>First Name <span className="required">*</span></label>
                                                            <input type="text" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkout-form-list">
                                                            <label>Last Name <span className="required">*</span></label>
                                                            <input type="text" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="checkout-form-list">
                                                            <label>Company Name</label>
                                                            <input type="text" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="checkout-form-list">
                                                            <label>Address <span className="required">*</span></label>
                                                            <input type="text" placeholder="Street address" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="checkout-form-list">
                                                            <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="checkout-form-list">
                                                            <label>Town / City <span className="required">*</span></label>
                                                            <input type="text" placeholder="Town / City" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkout-form-list">
                                                            <label>State / County <span className="required">*</span></label>
                                                            <input type="text" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkout-form-list">
                                                            <label>Postcode / Zip <span className="required">*</span></label>
                                                            <input type="text" placeholder="Postcode / Zip" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkout-form-list">
                                                            <label>Email Address <span className="required">*</span></label>
                                                            <input type="email" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkout-form-list">
                                                            <label>Phone <span className="required">*</span></label>
                                                            <input type="text" placeholder="Postcode / Zip" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        
                                        }

                                        <div className="order-notes">
                                            <div className="checkout-form-list">
                                                <label>Order Notes</label>
                                                <textarea id="checkout-mess" cols="30" rows="10"
                                                    placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="your-order mb-30 ">
                                    <h3>Your order</h3>
                                    <div className="your-order-table table-responsive">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="product-name">Product</th>
                                                    <th className="product-total">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="cart_item">
                                                    <td className="product-name">
                                                        Vestibulum suscipit <strong className="product-quantity"> × 1</strong>
                                                    </td>
                                                    <td className="product-total">
                                                        <span className="amount">$165.00</span>
                                                    </td>
                                                </tr>
                                                <tr className="cart_item">
                                                    <td className="product-name">
                                                        Vestibulum dictum magna <strong className="product-quantity"> × 1</strong>
                                                    </td>
                                                    <td className="product-total">
                                                        <span className="amount">$50.00</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr className="cart-subtotal">
                                                    <th>Cart Subtotal</th>
                                                    <td><span className="amount">${total}</span></td>
                                                </tr>
                                                <tr className="shipping">
                                                    <th>Shipping</th>
                                                    <td> 
                                                        <ul>
                                                            <li>
                                                                <input type="radio" id='flat-rate' />{" "}
                                                                <label htmlFor='flat-rate'>Flat Rate: <span className="amount">$7.00</span></label>
                                                            </li>
                                                            <li>
                                                                <input type="radio" id='free-shipping' />{" "}
                                                                <label htmlFor='free-shipping'> Free Shipping:</label>
                                                            </li>
                                                            <li></li>
                                                        </ul> 
                                                    </td>
                                                </tr>
                                                <tr className="order-total">
                                                    <th>Order Total</th>
                                                    <td><strong><span className="amount">${total}</span></strong>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                    <div className="payment-method">
                                        <div className="accordion" id="accordionExample"> 
                                            <div className="faq-accordion">
                                                <div className="accordion" id="accordionExample">
                                                    {accordion_data.map((item) => (
                                                        <div key={item.id} className="accordion-items">
                                                            <h2 className="accordion-header" id={`heading${item.accordion_id}`}>
                                                                <button
                                                                className={`accordion-button faq_btn_3 ${item.collapsed}`}
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target={`#collapse${item.accordion_id}`}
                                                                aria-expanded={item.aria_expanded}
                                                                aria-controls={`collapse${item.accordion_id}`}
                                                                >
                                                                {item.question}
                                                                </button>
                                                            </h2>
                                                            <div
                                                                id={`collapse${item.accordion_id}`}
                                                                className={`accordion-collapse collapse ${item.show}`}
                                                                aria-labelledby={`heading${item.accordion_id}`}
                                                                data-bs-parent="#accordionExample">
                                                                <div className="accordion-content faq_content">
                                                                    <p>{item.answer}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div> 

                                        </div>
                                        <div className="order-button-payment mt-20">
                                            <button type="submit" className="btn-cart">Place order</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default CheckoutArea;