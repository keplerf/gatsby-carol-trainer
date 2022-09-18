import styled from "styled-components"
import "../layout.css"

export const MarqueeContent = styled.div`
  display: grid;
  transform: rotate(1deg);
  padding: 0 0 var(--size-gutter) var(--size-gutter);
  z-index: 9;

  &.isHome {
    grid-template-columns: 1fr 1fr;
    max-width: 1200px;
    margin: 0 auto -10px;
  }

  & > :first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-bottom: var(--size-gap);
  }

  & > section {
    color: var(--color-code-bg);
    font-weight: 700;
    font-size: 20px;
    & span {
      color: var(--color-contrast);
    }
  }

  & h1 {
    font-size: 4vw;
    line-height: 4vw;
    color: var(--color-code-bg);
    margin: 0;
    text-shadow: 5px 5px 3px rgb(0 0 0 / 20%);
    font-weight: 700;
    font-size: 82px;
    line-height: 99px;
  }

  & h2 {
    font-weight: 400;
    color: var(--color-contrast);
    font-size: 34px;
    line-height: 45px;
    margin: 0 -0.45em 20px 0;
    letter-spacing: 0.45em;
  }
`

export const MarqueConatiner = styled.div`
  position: relative;
  overflow: hidden;
`

export const MarqueeWrapper = styled.section`
  margin: 0 auto;
  /* max-width: var(--size-content); */
  padding: var(--size-gutter);
  position: relative;
  background-color: var(--color-marquee-bg);
  background: linear-gradient(
    148deg,
    var(--color-primary) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  min-height: 70vh;
  margin: 0 -30px;
  transform: rotate(359deg);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 22px 32px -18px rgba(0, 0, 0, 0.25);

  &:after {
    display: block;
    content: "";
    width: 100%;
    height: 20vh;
    background: var(--color-primary);
    position: absolute;
    bottom: -10%;
    transform: rotate(-3deg);
    opacity: 0.7;
  }
  &:before {
    display: block;
    content: "";
    width: 100%;
    height: 28%;
    background: var(--color-contrast);
    position: absolute;
    bottom: -23%;
    z-index: 20;

    transform: rotate(-1deg);
  }

  iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vw;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 1;
    opacity: 0.2;
  }

  @media (min-aspect-ratio: 16/9) {
    .video-container iframe {
      height: 56.25vw;
    }
  }
  @media (max-aspect-ratio: 16/9) {
    .video-container iframe {
      width: 177.78vh;
    }
  }
`
