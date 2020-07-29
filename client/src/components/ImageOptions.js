import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

export default function ImageOptions() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    var form = document.getElementById("image-options-form");
    if (!visible) {
      setVisible(true);
      form.style.visibility = "visible";
      form.style.opacity = "1";
    } else {
      setVisible(false);
      form.style.opacity = "0";
      form.style.visibility = "hidden";
    }
  };

  return (
    <>
      <Options.Button id="image-options-button" onClick={handleClick}>
        <Options.Icon icon={faImage} />
        Options
      </Options.Button>
      <Options.Form id="image-options-form">
        <input type="radio" id="portrait" name="display" value="portrait" />
        <label>Portrait</label>
        <br />
        <input type="radio" id="landscape" name="display" value="landscape" />
        <label>Landscape</label>
        <br />
        <input
          defaultChecked
          type="radio"
          id="both"
          name="display"
          value="both"
        />
        <label>Both</label>
      </Options.Form>
    </>
  );
}

const Options = {
  Button: styled.button`
    background-color: transparent;
    border: none;
    border-radius: 10px;
    color: var(--primary);
    cursor: pointer;
    font-family: var(--text);
    font-size: 1.2rem;
    font-weight: 700;
    height: 2rem;
    outline: 0;
    text-decoration: none;
    transition: 500ms ease;

    /* Only allow the hover effect on large screens */
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color: var(--primary);
        color: var(--background);
      }
    }
  `,
  Icon: styled(FontAwesomeIcon)`
    margin-right: 0.3rem;
  `,
  Form: styled.form`
    background-color: var(--background);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color: var(--primary);
    font-family: var(--text);
    font-size: 1.2rem;
    opacity: 0;
    padding: 0.5rem;
    position: absolute;
    top: 5rem;
    transition: 500ms ease;
    visibility: hidden;

    & input {
      margin-bottom: 1rem;
    }
  `,
};
