import React from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Services from "../components/Services";
import About from "../components/About";
import Manta from "../components/Manta";
import Footer from "../components/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Section />
      <About />
      <Services />
      <Manta />
      <Footer/>
      {/* Other content of your application */}
    </div>
  );
}

export default App;
