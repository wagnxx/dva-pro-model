import React from 'react';
import PropTypes from 'prop-types';



const TestList =({test,increse})=>{
  return <h3>{test||"testpage"}  <button >add</button> </h3>
}

TestList.propTypes = {
  test: PropTypes.array.isRequired,

};

export default TestList;
