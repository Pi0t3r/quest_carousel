import StarIcon from '@mui/icons-material/Star';
export const Content = () => {
  return (
    <div className='container__content'>
      <h2
        style={{
          fontWeight: 'bold',
          fontSize: '40px',
        }}
      >
        Serwis i naprawa Twojego auta
      </h2>
      <p
        style={{
          color: '#757575',
          fontWeight: 'semibold',
        }}
      >
        Mamy w swojej bazie{' '}
        <span
          style={{
            color: 'black',
            fontWeight: 'bold',
          }}
        >
          84 114 warszatów
        </span>
        , ocenianych średnio na{' '}
        <span
          style={{
            color: 'yellow',
          }}
        >
          <StarIcon />
        </span>
        <span
          style={{
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          4.0
        </span>
      </p>
    </div>
  );
};
