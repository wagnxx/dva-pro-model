import React from 'react';
import {Router, Route, Switch, IndexRoute} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Test from './routes/Test';


//kb
import KBManage from "./routes/KBManageRoute"


function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage}/>

        <Route path="/products" exact component={Products}/>
        <Route path="/test" exact component={Test}/>

        <Route path="/kbmanage" component={KBManage}/>

        <Route path="/kbmanage/base" component={KBManage}/>

      </Switch>
    </Router>
  );
}

export default RouterConfig;
