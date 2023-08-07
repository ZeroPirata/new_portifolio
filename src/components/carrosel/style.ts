import styled, {css} from "styled-components";

export const SCarouselWrapper = styled.div`
  display: flex;
`;

interface ICarouselSlide {
  active?: boolean;
}
export const MainDiv = styled.section`
  height: 100%;
  margin: 0 5px;
  overflow: hidden;
  display: flex;
  .button-left,
  .button-right {
    margin: 0 5px;
    background-color: transparent;
    z-index: 10;
    position: relative;
    border-style: solid;
  }
  .button-left {
    height: 100%;
    font-size: 5em;
  }
  .button-right {
    font-size: 5em;
    height: 100%;
  }
  .button-left::before {
    content: "<";
  }
  .button-right::before {
    content: ">";
  }
`;

export const SCarouselSlide = styled.div<ICarouselSlide>`
  flex: 0 0 auto;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: all 0.5s ease;
  width: 100%;
  .image-carousel {
    width: 100%;
    height: 100%;
  }
`;

interface ICarouselProps {
  currentSlide: number;
}

export const SCarouselSlides = styled.div<ICarouselProps>`
  display: flex;
  ${(props) =>
    props.currentSlide &&
    css`
      transform: translateX(-${props.currentSlide * 100}%);
    `};
  transition: all 0.5s ease;
`;
