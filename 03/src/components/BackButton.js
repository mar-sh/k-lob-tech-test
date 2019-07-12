import React from 'react';
import { withRouter } from 'react-router-dom';

function BackButton({ history }) {
  return (
    <button 
     className='btn btn-outline ml-2'
     onClick={() => history.goBack()}>
      <span className='h5'>← Go Back</span>
    </button>
  );
}

export default withRouter(BackButton);
