/**
 * Created by Wagnxx At 2018/11/16
 */

import React, {Component} from 'react'
import  {Tabs} from "antd"
import  {URL_,_url} from "./fecth"
const TabPane = Tabs.TabPane;

export default class Charts extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
      fetch(_url,{
        method:'get'
      }).then(res=>{
        return res
      }).then(data=>{
        console.log(data)
      })
    }

    render() {
        return <div style={{width:"600px",margin:"0 auto",border:"1px solid #eee",padding:"8px"}}>

      <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
      </div>
    }
}
function callback(key) {
  console.log(key);
}
