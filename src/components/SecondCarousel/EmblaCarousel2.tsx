import React, {useCallback, useEffect, useRef} from 'react';
import {
  EmblaCarouselType,
  // EmblaEventType,
  EmblaOptionsType,
} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons2';
import {data} from '../../data';

const TWEEN_FACTOR_BASE = 0.84;

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const {slides, options} = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const handleOpacity = useCallback((emblaApi: EmblaCarouselType) => {
    const slidesInView = emblaApi.slidesInView().slice(0, 5);

    slidesInView.forEach((slideIndex, index) => {
      if (slideIndex === 0 || slideIndex === 1) {
        emblaApi.slideNodes()[slideIndex].style.opacity = '1';
        if (slideIndex > 1) {
          // emblaApi.slideNodes()[slideIndex - 2].style.opacity = '0.5';
          console.log(`current index: ${slideIndex}`);
        }
      }
      if (index > 2) {
        emblaApi.slideNodes()[index].style.background = 'red';
      }
      console.log(`obecny index: ${index}`);
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    emblaApi.on('reInit', setTweenFactor);
  }, [emblaApi, setTweenFactor]);

  useEffect(() => {
    if (!emblaApi) return;

    const handleScroll = () => {
      handleOpacity(emblaApi);
    };

    handleOpacity(emblaApi);
    emblaApi.on('scroll', handleScroll);

    return () => {
      emblaApi.off('scroll', handleScroll);
    };
  }, [emblaApi, handleOpacity]);

  return (
    <div className='embla2'>
      <div className='embla__viewport2' ref={emblaRef}>
        <div className='embla__container2'>
          {slides.map((index) => (
            <div className='embla__slide2' key={index}>
              <div
                style={{
                  width: '100%',
                }}
              >
                <img
                  loading='lazy'
                  className='embla__slide__img2'
                  src={data[index].image}
                  alt={data[index].title}
                />
              </div>
              <p
                className='embla__slide__text2'
                style={{
                  textAlign: 'center',
                }}
              >
                {data[index].title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='embla__controls2'>
        <div className='embla__buttons2'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
