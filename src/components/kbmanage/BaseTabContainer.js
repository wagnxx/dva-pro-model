/**
 * Created by wagnxx At 2018/11/6
 */

import React, {Component} from "react"
import PropTypes  from "prop-types"
import { Tabs } from 'antd';

import TaskTabprofessionContent from  "./TaskTabprofessionContent"
import TaskTabChantContent from  "./TaskTabChantContent"
import TaskTabSynonymDictContent from  "./TaskTabSynonymDictContent"

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

const TabChildtContent= (pr)=>{
  console.log(pr)
return  <div> child is {pr.name}</div>
}
const KBManageMenu = [{
  name: '专业问答',
  id: '1_1_2',
  child: <TaskTabprofessionContent name={"专业回答"}/>,
},{
  name: '闲聊对话',
  id: '1_1_1',
  child: <TaskTabChantContent name={"闲聊对话"}/>,
},{
  name: '同义词',
  id: '1_1_3',
  child: <TaskTabSynonymDictContent name={"同义词"}/>,
},/*{
  name: '专业词',
  id: '1_1_4',
  child: <TabProDictContent type={'term'}/>,
},{
  name: '意图关键词',
  id: '1_1_5',
  child: <TabIntentionDictContent type={'intention'}/>,
}*/];


const TabContainer = ()=>{
let tabs =[];
  KBManageMenu.map(item => {

    tabs.push( <TabPane tab={item.name} key={item.id}>{item.child}</TabPane>);

  });
  return <Tabs onChange={callback} type="card" animated={false}>
    {/*<TabPane key={1} tab={"item1"}>child1</TabPane>*/}
               {/*<TabPane key={2} tab={"item2"}>child2</TabPane>*/}
               {/*<TabPane key={3} tab={"item3"}>child3</TabPane>*/}
    {
      tabs.map(item=>{
        return item
      })
    }
  </Tabs>
}



// export default class BaseTabContainer extends Component {
//   static propTypes={
//     products:PropTypes.array.isRequired
//   }
//     constructor(props) {
//         super(props)
//       console.log(props)
//     }
//
//     render() {
//
//
//         return  <Tabs onChange={callback} type="card">
//           {
//             tabs
//           }
//
//           {/*<TabPane key={1} tab={"item1"}>child1</TabPane>*/}
//           {/*<TabPane key={2} tab={"item2"}>child2</TabPane>*/}
//           {/*<TabPane key={3} tab={"item3"}>child3</TabPane>*/}
//         </Tabs>
//     }
// }

// const BaseTabContainer = ({products})=>{
//   console.log(products)
//   return <div>ToolList working</div>
// }
// BaseTabContainer.propTypes={
//   products:PropTypes.array.isRequired
// }
 export  default  TabContainer
