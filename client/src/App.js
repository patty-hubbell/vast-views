import React, { useEffect } from "react";

import Header from "./components/Header";
import Loader from "./components/Loader";
import Images from "./components/Images";
import InfoButton from "./components/InfoButton";
import unsplashApiDev from "./api/unsplashApiDev";
import unsplashApi from "./api/unsplashApi";

export default function App() {
  /* Development Code */
  //const unsplashDev = unsplashApiDev();
  const unsplash = unsplashApi();

  useEffect(() => {
    /* Development Code */
    //unsplashDev.getDocumentElements();
    //unsplashDev.getImages();

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
