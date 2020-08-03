import React from "react";
import styled from "styled-components";

export default function Images() {
  return <Imgs.Container id="image-container"></Imgs.Container>;
}

const Imgs = {
  Container: styled.div`
    margin: 10px 30%;

    & .image-and-info-container {
      display: flex;
      flex-direction: column;
      padding-bottom: 10px;
      padding-top: 10px;
    }

    & img {
      height: 100%;
      width: 100%;
    }

    & .image-info {
      align-items: center;
      display: flex;
      height: 2rem;
      position: relative;
    }

    &.image-author-name {
      margin: 0;
    }

    & .image-author-link,
    .image-download-link {
      color: var(--primary);
      font-family: var(--text);
      font-size: 0.9rem;
      font-weight: 700;
      text-decoration: none;
    }

    & .image-download-link {
      position: absolute;
      right: 0;
    }

    & .image-author-pic {
      border-radius: 50%;
      height: 1.7rem;
      margin-left: 0.1rem;
      margin-right: 0.4rem;
      width: 1.7rem;
    }
  `,
};
