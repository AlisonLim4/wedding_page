import React from "react";
import Photos from "./Photos";
import When from "./When";
import Confirmation from "./Confirmation";
import Footer from "./Footer";
import Header from "./Header";
import OurHistory from "./OurHistory";
import Schedule from "./Schedule";

const App = () => {
  return (
    <>
      <Header
        wife_name={"Rayssa"}
        husband_name={"Henrique"}
        data="01 de Janeiro de 2100"
      />
      <OurHistory wife_name={"Fulana"} husband_name={"Fulano"} />
      <Schedule />
      <Confirmation />
      <When />
      <Photos />
      <Footer />
    </>
  );
};

export default App;
