import React, { useEffect, useState } from "react";
import {
  FormControlLabel,
  Switch,
  Typography,
  Hidden,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export default function ThemeSwitch() {
  const [windowDimension, setWindowDimension] = useState(null);
  const [darkTheme, setDarkTheme] = useState(false);

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
      setDarkTheme(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      let labelText = document.getElementById("label-text");
      labelText.textContent = "Light";
      setDarkTheme(false);
      document.documentElement.setAttribute("data-theme", "light");
    }
  };
  return (
    <>
      {darkTheme ? (
        <Theme.Icon id="theme-icon" icon={faMoon} />
      ) : (
        <Theme.Icon id="theme-icon" icon={faSun} />
      )}
      <FormControlLabel
        control={<Switch className="theme-switch" onChange={toggleChecked} />}
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
  display: "none",
};

const Theme = {
  Icon: styled(FontAwesomeIcon)`
    color: var(--primary);
    font-size: 1.2rem;
    margin-right: 15px;
  `,
};
