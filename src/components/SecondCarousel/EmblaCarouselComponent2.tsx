import EmblaCarousel from './EmblaCarousel2';
import {EmblaOptionsType} from 'embla-carousel';
import './css/base.css';
import {Content} from './Content';
import {data} from '../../data';
const OPTIONS: EmblaOptionsType = {align: 'start'};
const SLIDE_COUNT = data.length;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const EmblaCarouselComponent2 = () => {
  return (
    <div
      className='containerEmbla2'
      style={{
        display: 'flex',
      }}
    >
      <div className='container__content__title2'>
        <Content />
      </div>
      <div className='container__slider'>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};
