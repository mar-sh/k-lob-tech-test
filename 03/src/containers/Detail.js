import React from 'react';
import useFetchData from '../hooks/useFetchData';
import ImageFrame from '../components/ImageFrame';
import BackButton from '../components/BackButton';
import Alert from '../components/Alert';

export default function Detail({ match, history }) {
  const textStyle = {
    fontWeight: '700',
    color: 'rgb(240, 88, 80)',
  };

  const [{ data }, loading, error] = useFetchData(
    `/asset/${match.url.split('/')[1]}.json`
  );

  const display = data && data.filter(d => d.id === match.params.id)[0];

  return (
    <>
      <BackButton />
      <div className='d-flex flex-column align-items-center justify-content-center'>
        {loading && <h1 className='text-center'>Loading...</h1>}
        {error && <Alert text={error.message} />}
        {display && !error && (
          <>
            <ImageFrame source={display.img} width={'40%'} height={450} />
            <span
              className='text-center h3 text-uppercase my-2'
              style={textStyle}
            >
              {display.name}
            </span>
            <span className='text-center h5' style={{ color: textStyle.color }}>
              {display.desc}
            </span>
          </>
        )}
      </div>
    </>
  );
}
