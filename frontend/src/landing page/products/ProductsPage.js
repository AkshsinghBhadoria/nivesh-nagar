import React from "react";
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <LeftSection />
          </div>
          <div className="col-6">
            <RightSection />
          </div>
        </div>
      </div>
      <Universe />
      <Footer />
    </div>
  );
}
export default ProductsPage;