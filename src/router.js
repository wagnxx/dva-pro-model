import React from 'react';

import { Switch, Route, Redirect, routerRedux } from 'dva/router'



import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Test from './routes/Test';
import Charts from './routes/charts/index';

import KBManage from "./routes/KBManageRoute"

const { ConnectedRouter } = routerRedux


const Routers = function ({history, app}) {
  const renderRoutes=function (routes, parentPath = '') {
    return routes.reduce((accumlator,{path,childRoutes,...dvnamics},key)=>{
      const compilePath = `${parentPath}${path}`

    })
  }
}














function RouterConfig({history}) {
  return (
    <ConnectedRouter history={history}>
      <IndexPage>
        <Switch>

        <Route path="/products" exact component={Products}/>
        <Route path="/test" exact component={Test}/>
        <Route path="/charts" exact component={Charts}/>

        <Route path="/kbmanage" component={KBManage}/>

        <Route path="/kbmanage/base" component={KBManage}/>
        </Switch>
      </IndexPage>
    </ConnectedRouter>
  );
}

export default RouterConfig;
