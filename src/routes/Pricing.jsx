import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import HeroImage from "../components/heroimage/HeroImage";
import PricingCards from "../components/pricing/Pricing";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <HeroImage heading="PRICING." text="Choose your trip." />
      <PricingCards />
      <Footer />
    </>
  );
};

export default Pricing;
