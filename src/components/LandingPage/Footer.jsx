import React from "react";
import FB_SVG from "../../assets/images/fb.svg";
import TWITTER_SVG from "../../assets/images/twitter.svg";
import PIN_SVG from "../../assets/images/pin.svg";
import FOOTER_LOGO from "../../assets/images/The-plenty.svg";

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 footer-box">
                        <h6 className="wow fadeInUp">Company</h6>
                        <ul className="wow fadeInUp" data-wow-delay="0.3s">
                            <li><a href="#">About</a></li>
                            <li><a href="#">News Room</a></li>
                            <li><a href="#">Security</a></li>
                            <li><a href="#">Privacy Settings</a></li>
                        </ul>
                    </div>

                    <div className="col-sm-3  footer-box">
                        <h6 className="wow fadeInUp">Help</h6>
                        <ul className="wow fadeInUp" data-wow-delay="0.3s">
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Legal Information</a></li>
                            <li><a href="#">Member Support Center</a></li>
                            <li><a href="#">LicenseAndServices</a></li>
                            <li><a href="#">Renewal Pricing</a></li>
                            <li><a href="#">CancellationAndRefund Policy</a></li>
                        </ul>
                    </div>

                    <div className="col-sm-6 text-end">
                        <ul className="social-icons wow fadeInUp" data-wow-delay="0.3s">
                            <li><a href="#"><img src={FB_SVG} alt={"image"} /></a></li>
                            <li><a href="#"><img src={TWITTER_SVG} alt={"image"} /></a></li>
                            <li><a href="#"><img src={PIN_SVG} alt={"image"} /></a></li>
                        </ul>
                        <a href="#" className="footer-logo wow fadeInUp" data-wow-delay="0.4s"><img src={FOOTER_LOGO} alt={"image"} /></a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer;