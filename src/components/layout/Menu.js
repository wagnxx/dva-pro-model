import React from "react"
import { Link } from 'dva/router'
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';

const {
  Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const menuTreen =[
  // {
  //   id: 'home',
  //   name: '首页',
  //   route: '/home',
  // },
  {
    id: 'badcaseOverview',
    name: 'badcase概览',
    route: '/badcaseOverview',
  },
  // {
  //   id: 'typeDiagnosis',
  //   name: '类型诊断',
  //   route: '/typeDiagnosis',
  // },
  {
    id: 'caseDiagnosis',
    name: 'adid badcase分析',
    // name: 'case诊断',
    // route: '/caseDiagnosis',
    children: [
      {
        id: 'baseDiagnosis',
        name: '基本诊断',
        route: '/baseDiagnosis',
      },
      {
        id: 'dimensionsDiagnosis',
        name: '素材&实验诊断',
        route: '/dimensionsDiagnosis',
      },
      {
        id: 'userDetail',
        name: '人群诊断',
        route: '/userDetail',
      },
    ],
  },
  {
    id: 'detailData',
    name: '用户展示广告分析',
    // name: '详细数据',
    // route: '/detailData',
    children: [
      {
        id: 'caseDetail',
        name: 'case详情',
        route: '/caseDetail',
      },{
        id: 'caseAnalysis',
        name: '用户分析',
        route: '/caseAnalysis',
      },
    ],
  },
  {
    id: 'estimatedDistribution',
    name: '模型预估分布',
    route: '/estimatedDistribution',
  },
  {
    id: 'helpDoc',
    name: '帮助文档',
    route: '/helpDoc',
  },
]


const createMenuTree =function (menu) {
   return menu.map((item)=>{
     if(item.children){
       return <Menu.SubMenu key={item.id} title={item.name}>
         {createMenuTree(item.children)}
       </Menu.SubMenu>
     }
     return (
       <Menu.Item key={item.id}>
         <Link to={item.route || "#"}>{item.name}</Link>
       </Menu.Item>
     );


   });
}

const itemMenu=createMenuTree(menuTreen)


const  CustomMenu = function () {
  return <Menu
    defaultSelectedKeys={['002_2']}
    defaultOpenKeys={['002']}
    onSelect={({ item, key, selectedKeys })=>{
    console.log(selectedKeys)
    }
    }
    style={{ width: 200 }} mode="vertical" theme={"light"}>
    {itemMenu}

  </Menu>
}





export  default  CustomMenu;
