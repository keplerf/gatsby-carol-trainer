import styled from "styled-components"
import "../layout.css"

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
    height: 100px;
    background: var(--color-primary);
    position: absolute;
    bottom: -10%;
    transform: rotate(-3deg);
  }
  &:before {
    display: block;
    content: "";
    width: 100%;
    height: 28%;
    background: var(--color-contrast);
    position: absolute;
    bottom: -23%;
    z-index: 3;
    transform: rotate(-1deg);
  }

  & > :first-child {
    transform: rotate(1deg);
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--size-gutter) 0;
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
