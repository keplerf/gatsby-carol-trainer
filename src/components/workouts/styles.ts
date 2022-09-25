import styled from "styled-components"
import "../layout.css"

export const PostWrapper = styled.div`
  .swiper-button-prev {
  }
`
export const Post = styled.div`
  display: block;

  margin: 20px 10px;

  & > a {
    text-decoration: none;
    color: var(--color-text);
    position: relative;
    transition: all 1s;
    p {
      font-size: var(--font-sx);
      padding: var(--size-gutter) 0;
    }

    h3 {
      color: var(--color-contrast);
      position: absolute;
      border-radius: 0 5px 0 5px;
      line-height: calc(1.2 * var(--font-sm));
      background: #333333b3;
      font-size: var(--font-sm);
      top: calc(-4 * var(--space-2));
      left: calc(var(--space-2) * -1);
      width: 80%;
      padding: 10px var(--space-4);
      box-shadow: 0px 12px 42px -18px rgba(0, 0, 0, 0.75);
    }

    & .link-more {
      display: none;
    }

    &:hover {
      & > h3 {
        background: var(--color-contrast);
        color: var(--color-text);
      }
      & .gatsby-image-wrapper {
        opacity: 0.9;
      }
    }
  }
`
export const ImageWrapper = styled.div`
  position: relative;
  background: #fff;
  overflow: hidden;
  height: 200px;
  display: block;
  width: 100%;
  border-radius: 0 18px 0 18px;
  box-shadow: 0px 20px 10px -18px rgb(0 0 0 / 25%);

  & > :first-child {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: auto;
    opacity: 0.2;
    transition: all 1s;

    /* &:hover {
      opacity: 0.9;
    } */
  }
`
