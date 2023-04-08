import React from "react";
import ICON_ONE from "../../../assets/images/icon1.svg";
import ICON_TWO from "../../../assets/images/icon2.svg";
import ICON_THREE from "../../../assets/images/icon3.svg";

const SectionThree = () => {
    return (
        <section className="three-box" id="theplenty">
            <div className="container">
                <div className="heading wow fadeInUp">Why you need the-plenty</div>
                <div className="row">
                    <div className="col-sm-4 plenty-box wow fadeInUp" data-wow-delay="0.3s">
                        <div className="plenty-box-inner">
                            <div className="plenty-icon"><img src={ICON_ONE} alt="image" /></div>
                            <h4>Closing an estate is time-consuming and stressful.</h4>
                            <p>Financial advisors and wills don't help here. Can we expound on why it is so hard?</p>
                        </div>
                    </div>

                    <div className="col-sm-4 plenty-box wow fadeInUp" data-wow-delay="0.4s">
                        <div className="plenty-box-inner">
                            <div className="plenty-icon"><img src={ICON_TWO} alt="image" /></div>
                            <h4>Property frequently goes unclaimed.</h4>
                            <p>Forgotten bank accounts, unrevealed life insurance policies, or previously unknown parts of the estate.</p>
                        </div>
                    </div>

                    <div className="col-sm-4 plenty-box wow fadeInUp" data-wow-delay="0.5s">
                        <div className="plenty-box-inner">
                            <div className="plenty-icon"><img src={ICON_THREE} alt="image" /></div>
                            <h4>We live in a paperless world.</h4>
                            <p>The average American has over 25 digital accounts without any paper trail.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionThree;