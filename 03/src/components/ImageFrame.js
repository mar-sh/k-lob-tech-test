import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ImageFrame({ name, source, width, height }) {
  const [loading, setLoading] = useState(true);

  return (
    <img
      src={
        loading
          ? 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'
          : source
      }
      className='img-frame img-fluid'
      style={{
        height,
        width,
      }}
      alt={`${name}`}
      onLoad={() => setLoading(false)}
    />
  );
}

ImageFrame.propTypes = {
  name: PropTypes.string,
  source: PropTypes.string,
  size: PropTypes.number,
};

ImageFrame.defaultProps = {
  name: 'content',
  source: 'https://source.unsplash.com/random',
  width: '100%',
  height: 220,
};
