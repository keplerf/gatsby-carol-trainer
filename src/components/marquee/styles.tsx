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
    rgba(0, 121, 177, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  min-height: 50vh;
  margin: 0 -30px;
  transform: rotate(359deg);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-shadow: 0px 22px 32px -18px rgba(0, 0, 0, 0.75); */

  & > :first-child {
    transform: rotate(1deg);
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--size-gutter) 0;
  }
`
