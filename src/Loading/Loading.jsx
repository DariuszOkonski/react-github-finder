import React from 'react';
import loading from './giphy.gif';

const Loading = () => {
  return (
    <div id="loading" style={{ textAlign: 'center' }} >
      <img
        src={loading}
        alt="loading"
        style={{ width: '250px' }}
      />
    </div>
  );
}

export default Loading;