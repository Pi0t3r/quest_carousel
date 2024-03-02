import React from 'react';
import {EmblaOptionsType} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons2';
import {data} from '../../data';

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const {slides, options} = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

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
