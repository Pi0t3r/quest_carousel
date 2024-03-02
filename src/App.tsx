import {useState} from 'react';
import {EmblaCarouselComponent} from './components/FirstCarousel/EmblaCarouselComponent';

import {EmblaCarouselComponent2} from './components/SecondCarousel/EmblaCarouselComponent2';
function App() {
  const [chosenCarousel, setChosenCarousel] = useState('');
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <h2>Choose carousel</h2>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '25%',
          margin: '0 auto 20px',
        }}
      >
        <button onClick={() => setChosenCarousel('First')}>1</button>
        <button onClick={() => setChosenCarousel('Second')}>2</button>
      </div>
      {chosenCarousel === 'First' && <EmblaCarouselComponent />}
      {chosenCarousel === 'Second' && <EmblaCarouselComponent2 />}
    </div>
  );
}

export default App;
