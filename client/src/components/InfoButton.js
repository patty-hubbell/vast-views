import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function InfoButton() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    let textContainer = document.getElementById("info-text-container");
    let infoBackground = document.getElementById("info-background");
    if (!visible) {
      setVisible(true);
      textContainer.style.visibility = "visible";
      textContainer.style.opacity = "1";
      infoBackground.style.visibility = "visible";
      infoBackground.style.opacity = "1";
    } else {
      setVisible(false);
      textContainer.style.opacity = "0";
      textContainer.style.visibility = "hidden";
      infoBackground.style.opacity = "0";
      infoBackground.style.visibility = "hidden";
    }
  };

  return (
    <>
      <Info.Button id="info-button" onClick={handleClick}>
        {!visible ? (
          <Info.Icon icon={faInfo} id="info-icon" />
        ) : (
          <Info.Icon icon={faTimes} id="info-icon" />
        )}
      </Info.Button>
      <Info.Background id="info-background" />
      <Info.TextContainer id="info-text-container">
        <Info.Title id="info-title">Welcome!</Info.Title>
        <Info.Text id="info-text">
          Vast Views allows you to view the vast array of nature images provided
          by the Unsplash API! You can select to view images in portrait
          orientation, landscape orientation, or both. Click on an image to
          learn more about it and the photographer who took it. Enjoy!
        </Info.Text>
        <Info.Author id="info-author">Patrick Hubbell 2020</Info.Author>
      </Info.TextContainer>
    </>
  );
}

const Info = {
  Button: styled.button`
    align-items: center;
    background-color: var(--background);
    border: none;
    border-top-left-radius: 30px;
    bottom: 0;
    cursor: pointer;
    display: flex;
    height: 4rem;
    justify-content: center;
    outline: 0;
    position: fixed;
    text-decoration: none;
    transition: 500ms ease;
    right: 0;
    width: 4rem;
    z-index: 100;

    /* Only allow the hover effect on large screens */
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color: var(--primary);
        color: var(--background);
      }

      &:hover #info-icon {
        color: var(--background);
      }
    }
  `,
  Icon: styled(FontAwesomeIcon)`
    color: var(--primary);
    font-size: 1.2rem;
  `,
  Background: styled.div`
    background-color: var(--background-opaque);
    bottom: 0;
    left: 0;
    opacity: 0;
    position: fixed;
    right: 0;
    top: 0;
    transition: 500ms ease;
    visibility: hidden;
    z-index: 10;
  `,
  TextContainer: styled.div`
    background-color: var(--background);
    border: 2px solid var(--secondary);
    border-radius: 15px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 50%;
    opacity: 0;
    padding: 15px;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 500ms ease;
    visibility: hidden;
    z-index: 100;
  `,
  Title: styled.h1`
    color: var(--primary);
    font-family: var(--text);
    text-align: center;
  `,
  Text: styled.p`
    color: var(--primary);
    font-family: var(--text);
    font-size: 1.2rem;
  `,
  Author: styled.p`
    color: var(--primary);
    font-family: var(--text);
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
  `,
};
