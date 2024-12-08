import React from "react";

import Hero from "../components/hero";
import ProductLics from "@/components/productLics";
import Carousel from "@/components/Carsole";
import OurProduct from "@/components/OurProdutct";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export default function  page() {
  return (
    <div>
     
     
    {/* <Header/> */}
      <Hero/>
      <ProductLics/>
      <Carousel/>
      <OurProduct/>
      {/* <Footer/> */}
      
    </div>
  );
}
