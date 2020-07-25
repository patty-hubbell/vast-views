import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Head.Container id="header-container">
      <Head.Title id="header-title">Vast Views</Head.Title>
    </Head.Container>
  );
}

const Head = {
  Container: styled.div`
    align-items: center;
    background-color: var(--light);
    display: flex;
    height: 5rem;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
  `,
  Title: styled.h1`
    font-size: 2rem;
    letter-spacing: 3px;
    margin: 0;
    text-align: center;
  `,
};
