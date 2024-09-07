import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Link to="/poster1">poster1</Link>
      <Link to="/poster2">poster2</Link>
    </>
  );
};

export default Home;   