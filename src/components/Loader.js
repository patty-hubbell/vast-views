import React from "react";
import styled from "styled-components";

export default function Loader() {
  return (
    <Load.Container id="loader">
      <Load.Icon alt="Loading" src={require("../assets/loader.svg")} />
    </Load.Container>
  );
}

const Load = {
  Container: styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1;
  `,
  Icon: styled.img`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};
