import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FormControlLabel, Switch, Typography } from "@material-ui/core";

import ImageOptions from "./ImageOptions";

export default function Header() {
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 600;

  const toggleChecked = (event) => {
    if (event.target.checked) {
      let labelText = document.getElementById("label-text");
      labelText.textContent = "Dark";
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      let labelText = document.getElementById("label-text");
      labelText.textContent = "Light";
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  return (
    <>
      <Head.Container id="header-container">
        <Head.Left>
          <ImageOptions />
        </Head.Left>
        <Head.Middle>
          <Head.Title id="header-title">Vast Views</Head.Title>
        </Head.Middle>
        <Head.Right>
          <FormControlLabel
            control={<Switch onChange={toggleChecked} />}
            label={
              isMobile ? (
                <Typography id="label-text" style={formControlLabelStyleMobile}>
                  Light
                </Typography>
              ) : (
                <Typography id="label-text" style={formControlLabelStyle}>
                  Light
                </Typography>
              )
            }
          />
        </Head.Right>
      </Head.Container>
      <Head.Line />
    </>
  );
}

const formControlLabelStyle = {
  color: "var(--primary)",
  fontFamily: "var(--text)",
  fontSize: "1.2rem",
  fontWeight: "700",
};

const formControlLabelStyleMobile = {
  color: "var(--primary)",
  fontFamily: "var(--text)",
  fontSize: "0.8rem",
  fontWeight: "700",
};

const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const Head = {
  Container: styled.div`
    background-color: var(--header-background-color);
    background-image: var(--header-background-image);
    display: flex;
    height: 5rem;
    position: fixed;
    top: 0;
    width: 100%;
  `,
  Left: styled(ContentContainer)`
    position: relative;
    width: 30%;
  `,
  Middle: styled(ContentContainer)`
    width: 40%;
  `,
  Right: styled(ContentContainer)`
    width: 30%;
  `,
  Title: styled.h1`
    color: var(--primary);
    font-size: 2.3rem;
    letter-spacing: 3px;
    margin: 0;
  `,
  Line: styled.div`
    background-color: var(--secondary);
    height: 1px;
    opacity: 0.37;
    position: fixed;
    margin: 0;
    width: 100%;
  `,
  LabelText: styled(Typography)``,
};
