import React from "react";
import Region from "./components/Region";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
function App() {
  return (
    <div className="">
      <Header />
      <Region name="Afrique" regionUrl="africa" />
      <Region name="Amérique" regionUrl="americas" />
      <Region name="Asie" regionUrl="asia" />
      <Region name="Europe" regionUrl="europe" />
      <Region name="Océanie" regionUrl="oceania" />
      <Footer />
    </div>
  );
}

export default App;
