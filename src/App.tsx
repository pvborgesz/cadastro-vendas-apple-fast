import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Navbar";
import ControlledCarousel from "./components/ControlledCarousel";
import BgColorExampleBgColorExample from "./components/Card";
function App() {
  return (
    <>
      <Header />
      <BgColorExampleBgColorExample />
    </>
  );
}

export default App;
