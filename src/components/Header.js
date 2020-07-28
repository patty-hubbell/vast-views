import React from "react";
import styled from "styled-components";
import ImageOptions from "./ImageOptions";

export default function Header() {
  return (
    <Head.Container id="header-container">
      <Head.Left>
        <ImageOptions />
      </Head.Left>
      <Head.Middle>
        <Head.Title id="header-title">Vast Views</Head.Title>
      </Head.Middle>
      <Head.Right></Head.Right>
    </Head.Container>
  );
}

const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  height: 5rem;
  justify-content: center;
`;

const Head = {
  Container: styled.div`
    background-color: var(--light);
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
    font-size: 2rem;
    letter-spacing: 3px;
    margin: 0;
  `,
};
