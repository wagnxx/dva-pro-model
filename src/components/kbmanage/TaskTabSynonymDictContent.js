/**
 * Created by Wagnxx At 2018/11/6
 */

import React, {Component} from "react"
import {
  Input,
  Form,
  Select,
  DatePicker,
  Radio,
  Table,
  Button,
  message,
  Badge,
  Icon,
  Pagination,
  Popconfirm,
  Modal,
} from 'antd';

const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  width:"10%"
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
  width:"10%",
  render: text => {
    // console.log(text)
    return <a href="javascript:;">{text*10}</a>
  }
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',

}];

const rowSelection = {
  columnWidth:'30px',
  // columnTitle:"all checked",
  type:"checkbox",
  // onChange: (selectedRowKeys, selectedRows) => {
  //   console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  // },
  // onSelect:(record, selected, selectedRows, nativeEvent)=>{
  //   console.log(selectedRows)
  // },
  onSelectAll:(selected, selectedRows, changeRows)=>{
    console.log(selectedRows)
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
}

export default class TaskTabSynonymDictContent extends Component {
    constructor(props) {
        super(props)
      this.state={
          buttonVal:false
      }
    }
  onDoneStatusChange=(e)=>{
      let f_val=!(Boolean(this.state.buttonVal));

    this.setState({
      buttonVal:f_val
    })
  }

    render() {
        return <div className={'panel'}>
          <section className={'panel_hd'} style={{padding:"10px 0"}}>
            <div className="panel_filter">
              <div className="panel_filter_main">
                {
                  <Form layout="inline">
                    <Form.Item>
                      <Radio.Group onChange={this.onDoneStatusChange} value={this.state.buttonVal} buttonStyle="solid">
                        <Radio.Button value={false}>待编辑
                          <span style={{position: 'absolute', top: '-16px', zIndex: 2}}><Badge
                            count={2}/></span>
                        </Radio.Button>
                        <Radio.Button value={true}>待审核
                          <span style={{position: 'absolute', top: '-16px', zIndex: 2}}><Badge count={'xx'}/></span>
                        </Radio.Button>
                      </Radio.Group>
                    </Form.Item>
                  </Form>
                }
              </div>

            </div>
          </section>
          <div className={"panel_body"}>
            <Table dataSource={dataSource} columns={columns}rowSelection={rowSelection}bordered/>
          </div>
        </div>
    }
}
