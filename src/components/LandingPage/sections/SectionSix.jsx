import React from "react";

const SectionSix = () => {
    return (
        <section className="information-form">
            <div className="container">
                <h6 className=" wow fadeInUp ">Get discounts, info, estate tips, and more</h6>
                <p className="wow fadeInUp" data-wow-delay="0.3s">Sign up for promotional emails</p>
                <form className=" wow fadeInUp " data-wow-delay="0.4s">
                    <input type="email" placeholder="Your email address" />
                    <button type="button" className="btn btn-black">Free Information </button>
                </form>
            </div>
        </section>
    )
}

export default SectionSix;