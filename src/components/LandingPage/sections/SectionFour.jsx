import React from "react";
import GROUP_PNG from "../../../assets/images/group.png";

const SectionFour = () => {
    return (
        <section className="Estate-clousre" id="theproduct">
            <div className="container">
                <div className="heading text-center wow fadeInUp">The-plenty makes estate closure easy.</div>
                <div className="row">
                    <div className="col-sm-4 estate-left">
                        <ul>
                            <li className="wow fadeInUp" data-wow-delay="0.3s">
                                <span>1</span>
                                <h5>Record</h5>
                                <p>Input estate data into the-plenty secure platform</p>
                            </li>

                            <li className="wow fadeInUp" data-wow-delay="0.4s">
                                <span>2</span>
                                <h5>Share</h5>
                                <p>Named beneficiaries notified of the vault</p>
                            </li>

                            <li className="wow fadeInUp" data-wow-delay="0.5s">
                                <span>3</span>
                                <h5>Close</h5>
                                <p>In the event of death, beneficiaries granted access</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-8 estate-right text-center wow fadeInUp" data-wow-delay="0.5s">
                        <img src={GROUP_PNG} alt="group_img" />
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SectionFour;