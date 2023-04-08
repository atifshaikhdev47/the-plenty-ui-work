import React from "react";
import BANNER_BG from "../../../assets/images/bg.jpg";
import LOGO from "../../../assets/images/The-plenty.svg";

const SectionOne = () => {
    return (
        <section className="banner">
            <img className="banner-bg w-100" src={BANNER_BG} />
                <div className="banner-inner">
                    <div className="container">
                        <div className="banner-left">
                            <div className="banner-top">
                                <div className="banner-logo wow fadeInUp"><img src={LOGO} alt="logo" /></div>
                                <div className="banner-text wow fadeInUp">Simplify the transfer of your assets with a digital vault</div>
                            </div>

                            <div className="free-trial wow fadeInUp" data-wow-delay="0.3s">
                                <form>
                                    <input type="text" placeholder="Your email address" />
                                        <div className="form-btn">
                                            <button type="button" className="btn btn-black">Free Trail</button>
                                            <p>Try it for free 14 days! Cancel anytime</p>
                                        </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

        </section>
    )
}

export default SectionOne;