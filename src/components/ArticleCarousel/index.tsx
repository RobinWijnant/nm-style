import React, { Children, ComponentProps, Fragment, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import previousIcon from "../../assets/previous-icon.svg";
import nextIcon from "../../assets/next-icon.svg";
import stopIcon from "../../assets/stop-icon.svg";
import "./react-responsive-carousel.css";
import styles from "./index.module.css";

type Props = {};

const animationDurationInMs = 4000;

const ArticleCarousel: React.FC<Props> = ({ children }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true);
  const [shouldRestartAnimation, setShouldRestartAnimation] = useState(false);
  const amountOfSlides = Children.count(children);

  const handlePreviousClick = () => {
    const nextIndex =
      currentSlideIndex + 1 > amountOfSlides - 1 ? 0 : currentSlideIndex + 1;
    setCurrentSlideIndex(nextIndex);
  };

  const handleNextClick = () => {
    const nextIndex =
      currentSlideIndex - 1 < 0 ? amountOfSlides - 1 : currentSlideIndex - 1;
    setCurrentSlideIndex(nextIndex);
  };

  const handleChange = (index: number) => {
    setCurrentSlideIndex(index);
    setShouldRestartAnimation(true);
    setTimeout(() => setShouldRestartAnimation(false), 0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <Carousel
          dynamicHeight={true}
          infiniteLoop
          showIndicators={false}
          showStatus={false}
          showArrows={false}
          selectedItem={currentSlideIndex}
          onChange={handleChange}
          autoPlay={isAutoPlayEnabled}
          stopOnHover={false}
          showThumbs={false}
          interval={animationDurationInMs}
        >
          {
            Children.map(children, (child, index) => (
              <Fragment key={index}>{child}</Fragment>
            )) as ComponentProps<typeof Carousel>["children"]
          }
        </Carousel>
      </div>
      <div className={styles.status}>
        <span className={styles.currentIndex}>
          {currentSlideIndex + 1} / {amountOfSlides}
        </span>
        <div className={styles.bar}>
          <div
            className={styles.fill}
            style={
              isAutoPlayEnabled
                ? {
                    animation: shouldRestartAnimation ? "none" : undefined,
                  }
                : { animationPlayState: "paused" }
            }
          ></div>
        </div>
        <div className={styles.controls}>
          <img src={previousIcon} onClick={handlePreviousClick} role="button" />
          <img
            src={stopIcon}
            onClick={() => setIsAutoPlayEnabled(false)}
            role="button"
          />
          <img src={nextIcon} onClick={handleNextClick} role="button" />
        </div>
      </div>
    </div>
  );
};

export default ArticleCarousel;
