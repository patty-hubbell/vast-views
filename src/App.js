import React from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Wallpapers from "./components/Wallpapers";

export default function App() {
  return (
    <>
      {/* <Loader /> */}
      <Header />
      <Wallpapers />
    </>
  );
}
