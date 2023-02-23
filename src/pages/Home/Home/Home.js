import React from "react";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Games from "../Games/Games";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Sellers from "../Sellers/Sellers";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Games></Games>
      <About></About>
      <Sellers></Sellers>
      <WhyUs></WhyUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
