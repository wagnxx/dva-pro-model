


import React from 'react';
import { connect } from 'dva';
import BaseTabContainer from '../components/kbmanage/BaseTabContainer';

const KBManage = ({ dispatch, products }) => {
  console.log(dispatch,products)

  return (
    <div>
      <h2>List of Products</h2>
      <BaseTabContainer    products={products}/>
    </div>
  );
};

// export default Products;
export default connect(({ products }) => ({
  products,
}))(KBManage);



