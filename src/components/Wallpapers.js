import React from "react";
import styled from "styled-components";

export default function Wallpapers() {
  return (
    <Wall.Container id="wallpaper-container">
      <Wall.Image src="https://images.unsplash.com/photo-1595480788080-b158faee4930?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      <Wall.Image src="https://images.unsplash.com/photo-1595480788080-b158faee4930?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      <Wall.Image src="https://images.unsplash.com/photo-1595480788080-b158faee4930?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
    </Wall.Container>
  );
}

const Wall = {
  Container: styled.div`
    margin: 10px 30%;
  `,
  Image: styled.img`
    margin-bottom: 5px;
    width: 100%;
  `,
};
