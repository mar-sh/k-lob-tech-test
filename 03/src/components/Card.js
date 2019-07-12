import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import ImageFrame from './ImageFrame';

function Card({ data, match }) {
  const textStyle = {
    fontWeight: '700',
    color: 'rgb(240, 88, 80)',
  };

  return (
    <div className='d-flex flex-column'>
      <Link
        to={
          match.url === '/'
            ? `${match.url}${data.name}`
            : `${match.url}/${data.id}`
        }
      >
        <ImageFrame name={data.name} source={data.img} />
      </Link>
      <span className='text-center h4 text-uppercase' style={textStyle}>
        {data.name}
      </span>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export default withRouter(Card);
