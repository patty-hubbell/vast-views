import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Head.Container>
      <Head.Title id="header-title">Vast Views</Head.Title>
    </Head.Container>
  );
}

const Head = {
  Container: styled.div``,
  Title: styled.h1`
    font-size: 2rem;
    letter-spacing: 3px;
    text-align: center;
  `,
};
