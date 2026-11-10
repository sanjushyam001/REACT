import React from "react";
import Header from "./components/header/Header";
import Center from "./components/center/Center";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Categories from "./components/categories/Categories";

export default function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Categories />
      <Center />
      <Footer />
    </div>
  );
}
