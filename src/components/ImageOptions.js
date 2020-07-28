import React from "react";
import styled from "styled-components";

export default function ImageOptions() {
  return <Options.Button>Image Options</Options.Button>;
}

const Options = {
  Button: styled.button`
    background-color: transparent;
    border: none;
  `,
};
