import styled from "styled-components"
import "../layout.css"

export const PostWrapper = styled.div`
  display: grid;
  gap: var(--size-gutter);
  grid-template-columns: 1fr 1fr 1fr;
`
export const Post = styled.div`
  display: flex;
  flex-direction: column;

  & > a {
    text-decoration: none;
    color: var(--color-text);
    position: relative;
    p {
      font-size: var(--font-sx);
      padding: var(--size-gutter) 0;
    }

    h3 {
      color: var(--color-primary);
      position: absolute;
      background: var(--color-marquee-bg);
      top: var(--space-2);
      right: calc(var(--space-2) * -1);
      left: var(--space-2);
      padding: 10px var(--space-4);
      text-align: right;
      box-shadow: 0px 12px 42px -18px rgba(0, 0, 0, 0.75);
    }
  }
`
export const ImageWrapper = styled.div`
  position: relative;
  background: var(--color-text);
  overflow: hidden;
  height: 200px;
  display: block;
  width: 100%;
  border-radius: 0 18px 0 18px;

  & > :first-child {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: auto;
    opacity: 0.2;
  }
`
