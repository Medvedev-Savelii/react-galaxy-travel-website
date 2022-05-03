import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import HeroImage from "../components/heroimage/HeroImage";
import Form from "../components/contact/Form";
const Contact = () => {
  return (
    <>
      <Navbar />
      <HeroImage heading="CONTACT." text="Contact GLX Travel" />
      <Form />
      <Footer />
    </>
  );
};

export default Contact;
