import React, { useState } from "react";
import Header from "../../components/LandingPage/Header";
import SectionOne from "../../components/LandingPage/sections/SectionOne";
import SectionTwo from "../../components/LandingPage/sections/SectionTwo";
import SectionThree from "../../components/LandingPage/sections/SectionThree";
import SectionFour from "../../components/LandingPage/sections/SectionFour";
import SectionFive from "../../components/LandingPage/sections/SectionFive";
import SectionSix from "../../components/LandingPage/sections/SectionSix";
import Footer from "../../components/LandingPage/Footer";

const LandingPage = () => {
    const [toggleNavBar, setToggleNavbar] = useState(false);

    const handleToggleOnClick = () => {
        setToggleNavbar(!toggleNavBar);
    }
    return (
        <React.Fragment>
            <Header className={`${toggleNavBar ? 'd-block' : ''}`} handleToggleOnClick={handleToggleOnClick}/>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <Footer />
        </React.Fragment>
    )
}

export default LandingPage;