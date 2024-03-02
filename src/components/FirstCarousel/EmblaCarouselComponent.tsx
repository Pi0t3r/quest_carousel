import EmblaCarousel from './EmblaCarousel';
import {EmblaOptionsType} from 'embla-carousel';
import './css/base.css';
const OPTIONS: EmblaOptionsType = {loop: true};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
export const EmblaCarouselComponent = () => {
  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
};
