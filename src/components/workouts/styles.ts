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
`
export const ImageWrapper = styled.div`
  position: relative;
  background: var(--color-text);
  overflow: hidden;
  height: 200px;
  display: block;
  width: 100%;

  & > :first-child {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: auto;
    opacity: 0.2;
  }
`
