import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Navbar";
import Menu from "./components/Menu/indexMenu";
function App() {
  return (
    <>
      <Header />
      <Menu />
    </>
  );
}

export default App;
