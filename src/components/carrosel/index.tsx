
import * as React from "react";
import { imagePathResolve } from "utils/imageresolver";
import { SCarouselSlide, SCarouselWrapper, SCarouselSlides, MainDiv } from "./style";

interface IProps {
    children: string[];
}

const Carousel = ({ children }: IProps) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const activeSlide = children.map((slide, index) => (
        <SCarouselSlide active={currentSlide === index} key={index}>
            <img className="image-carousel" src={!slide.includes("https://") ? imagePathResolve(slide) : slide} alt={slide} />
        </SCarouselSlide>
    ));

    return (
        <MainDiv>
            <button
                className="button-left"
                onClick={() => {
                    setCurrentSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length);
                }}
            />
            <SCarouselWrapper>
                <SCarouselSlides currentSlide={currentSlide}>
                    {activeSlide}
                </SCarouselSlides>
            </SCarouselWrapper>
            <button
                className="button-right"
                onClick={() => {
                    setCurrentSlide((currentSlide + 1) % activeSlide.length);
                }}
            />
        </MainDiv>
    );
};

export default Carousel;