import React from "react";

const SectionFive = () => {
    return (
        <section className="plans" id="pricing">
            <div className="container">
                <div className="plan-inner ">
                    <div className="heading text-center wow fadeInUp">Invest in peace of mind</div>
                    <div className="plan-box wow fadeInUp" data-wow-delay="0.3s">
                        <h3> Annual Plan</h3>
                        <div className="plan-prices">
                            <strong>$.   /month</strong>
                            <p>$.  paid annually</p>
                        </div>
                    </div>
                    <div className="plan-box wow fadeInUp" data-wow-delay="0.4s">
                        <h3>Monthly Plan</h3>
                        <div className="plan-prices">
                            <strong>$.   /month</strong>
                        </div>
                    </div>

                    <span className="tax-applicable wow fadeInUp " data-wow-delay="0.5s">*plus tax where applicable</span>

                    <div className="w-100 text-center wow fadeInUp" data-wow-delay="0.6s" ><a href="#" className="btn btn-primary">Start Your Free Trial</a></div>

                </div>
            </div>
        </section>
    )
}

export default SectionFive;