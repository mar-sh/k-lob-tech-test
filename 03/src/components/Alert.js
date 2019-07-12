import React from 'react';
import PropTypes from 'prop-types';

export default function Alert({ text }) {
  return (
    <div class='alert alert-danger text-center' role='alert'>
      <span className='text-center'>{text}</span>
    </div>
  );
}

Alert.propTypes = {
  text: PropTypes.string,
};

Alert.defaultProps = {
  text: 'An error occured',
};
