import React, { useEffect } from "react";

import Header from "./components/Header";
import Loader from "./components/Loader";
import Images from "./components/Images";
import InfoButton from "./components/InfoButton";
import unsplashApi from "./api/unsplashApi";

export default function App() {
  const unsplash = unsplashApi();

  useEffect(() => {
    unsplash.getDocumentElements();
    unsplash.getImageOptions();
    unsplash.getImages();
  }, []);

  return (
    <>
      <Loader />
      <Header />
      <Images />
      <InfoButton />
    </>
  );
}
