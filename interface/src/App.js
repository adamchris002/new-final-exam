import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";

//react router dom
import { Routes, Route } from "react-router-dom";

//components
import { MenuBar } from "./components";

//pages
import { Home, Fruit, Category, Brand } from "./pages";

function App() {
  return (
    <div className="container-fluid">
      <MenuBar></MenuBar>
      {/* <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="fruits" element={<Fruit></Fruit>}></Route>
        <Route path="categories" element={<Category></Category>}></Route>
        <Route path="brands" element={<Brand></Brand>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
