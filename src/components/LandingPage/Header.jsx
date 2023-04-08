import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import TOGGLE_LOGO from "../../assets/images/toggle.svg";

const Header = ({className, handleToggleOnClick}) => {
    return (
        <section className="header">
            <div className="container d-flex align-items-center flex-wrap">
                <div className="header-left d-flex align-items-center flex-wrap">
                    <div className="logo"><a href="#" alt="logo"><img src={Logo} alt={"LOGO"}/></a></div>
                    <div className={`navigation ${className}`}>
                        <ul>
                            <li><a href="#theplenty">WHY the-plenty</a></li>
                            <li><a href="#theproduct">Product</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                        </ul>
                    </div>
                </div>
                <div className="header-right ms-auto  d-flex align-items-center flex-wrap">
                    <Link to={"/login"} type="button" className="btn btn-outline-primary">Log-In</Link>
                    <button type="button" className="btn btn-primary">Submit a clain</button>
                    <div className="toggle" onClick={handleToggleOnClick}><img src={TOGGLE_LOGO} alt={"TOGGLE_LOGO"} /></div>
                </div>
            </div>
        </section>
    )
}

export default Header;