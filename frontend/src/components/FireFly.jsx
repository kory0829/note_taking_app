import React from 'react';

const Firefly = () => {
  const fireflies = Array.from({ length: 6 }, (_, index) => (
    <div key={index} className="firefly"></div>
  ));

  return <>{fireflies}</>;
};

export default Firefly;
