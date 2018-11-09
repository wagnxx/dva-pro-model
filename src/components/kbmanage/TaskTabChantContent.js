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

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Disabled User',
  age: 99,
  address: 'Sidney No. 1 Lake Park',
}];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

export default class TaskTabChantContent  extends Component {
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
        <Table dataSource={data} columns={columns} rowSelection={rowSelection}/>
      </div>
    </div>
  }
}
