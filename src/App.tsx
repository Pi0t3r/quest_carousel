import {EmblaCarousel} from './components/EmblaCarousel';
import {EmblaOptionsType} from 'embla-carousel';
import {dataCarousel} from './data';
import StarIcon from '@mui/icons-material/Star';
import '../src/components/css/embla.css';
const SLIDE_COUNT = dataCarousel.length;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const OPTIONS: EmblaOptionsType = {loop: false};

function App() {
  return (
    <div className='container'>
      <div className='container__info'>
        <h2>Serwis i naprawa Twojego auta</h2>
        <p>
          Mamy w swojej bazie
          <b
            style={{
              marginLeft: 2,
            }}
          >
            84 114 warsztatów
          </b>
          , ocenianych średnio na
          <StarIcon />
          <b>4.0</b>
        </p>
      </div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}

export default App;
