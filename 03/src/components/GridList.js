import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card'

export default function GridList({data}) {
  return(
    <div className = 'container'>
      <div className = 'row'>
        { data && data.map ((d,index) => {
          return (
            <div key={ `${index}`} className = 'col-xs-12 col-sm-6 col-lg-4 my-2'>
              <Card 
                data={d}
              />
            </div>
          )
        })}
      </div>
    </div>
  );
};

GridList.propTypes = {
  data: PropTypes.array.isRequired,
};
