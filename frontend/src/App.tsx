import Home from "./components/Home/indexHome";
import Menu from "./components/Register/indexRegister";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/cadastrarProduto" element={<Menu />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
