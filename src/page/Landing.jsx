import React from "react";
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../container/Header";
import Services from "../container/Services";
import Footer from "../components/Sections/Footer"

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Footer />
    </>
  );
}


