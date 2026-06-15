import React from "react";
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Hero from "./Hero";
import CreateTicket from "./CreateTicket";

function SupportPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CreateTicket />
      <Footer />
    </div>
  );
}
export default SupportPage;