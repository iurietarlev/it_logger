import React from 'react';

//Loading bar, if the fetching of the data takes a long time
const Preloader = () => {
  return (
    <div className="progress blue lighten-4">
      <div className="indeterminate blue"></div>
    </div>
  );
};

export default Preloader;
