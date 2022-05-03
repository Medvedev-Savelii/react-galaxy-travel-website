import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import HeroImage from "../components/heroimage/HeroImage";
import TrainingForm from "../components/training/Training";
const Training = () => {
  return (
    <>
      <Navbar />
      <HeroImage heading="TRAINING." text="Pre-Flight & In-Flight Training." />
      <TrainingForm />
      <Footer />
    </>
  );
};

export default Training;
