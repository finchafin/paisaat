import { Fragment } from "react";

import MenuBar from "./MenuBar/MenuBar";
import TopSection from "./Sections/TopSection/TopSection";
import AboutUs from "./Sections/AboutUs/Aboutus";
import OurVision from "./Sections/OurVision/OurVision";
import OurServices from "./Sections/OurServices/OurServices";
import ContactUs from "./Sections/ContactUs/Contactus";
import Footer from './Sections/Footer/Footer';

// import cssClasses from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <Fragment>
      <MenuBar/>
      <TopSection />
      <AboutUs /> 
      <OurVision />
      <OurServices />
      <ContactUs />
      <Footer />
    </Fragment>
  );
};

export default LandingPage;
