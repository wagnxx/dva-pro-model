import React from 'react';
import { connect } from 'dva';
import TestList from '../components/TestList';

const Test = ({ dispatch,test }) => {



  return (
    <div>
      <h2>List of TestList</h2>
      <TestList test={test} />
    </div>
  );
};

// export default Products;
export default connect((state) =>
  {
    console.log(state)
    return ({
      test:state.testObj
    })
  }
)(Test);
