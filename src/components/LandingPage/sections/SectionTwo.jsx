import React from "react";
import ARROW_DOWN from "../../../assets/images/Arrow-down.svg";

const SectionTwo = () => {
    return (
        <section className="peace-of-mind text-center">
            <div className="container">
                <h1 className="wow fadeInUp">Peace of mind</h1>
                <p className="wow fadeInUp" data-wow-delay="0.3s">Simplify your estate transfer by providing digital access to your beneficiaries.</p>
                <p className="wow fadeInUp" data-wow-delay="0.4s">See how easy it is with the plenty</p>
                <a href="#" className="wow fadeInUp" data-wow-delay="0.5s"><img src={ARROW_DOWN} className="arrow" /></a>
            </div>
        </section>
    )
}

export default SectionTwo;