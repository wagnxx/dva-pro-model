/**
 * Created by Wagnxx At 2018/11/7
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
  question: 'question1',
  answer: '答案1',
  editor: '编辑人1',
  editTime:'1',
  status:'状态',
  validity:'有效期1'
  },
  {
    key: '2',
    question: 'question1',
    answer: '答案1',
    editor: '编辑人1',
    editTime:'2',
    status:'状态',
    validity:'有效期1'
  },
  {
    key: '3',
    question: 'question1',
    answer: '答案1',
    editor: '编辑人1',
    editTime:'3',
    status:'状态',
    validity:'有效期1'
  },
  {
    key: '4',
    question: 'question1',
    answer: '答案1',
    editor: '编辑人1',
    editTime:'4',
    status:'状态',
    validity:'有效期1'
  },
];



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

export default class TaskTabprofessionContent extends Component {
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
  delQuestion=(record,e)=>{
    console.log(this,record,e)
  }

  render() {

    const columns = [
      {
        title: '标准问题',
        dataIndex: 'question',
        // sorter: true,
        width: '20%'
      },
      {
        title: '答案',
        dataIndex: 'answer',
      },
      {
        title: '编辑人',
        dataIndex: 'editor',

      },
      {
        title: '编辑时间',
        dataIndex: 'editTime',
        sorter: true
      },
      {
        title: '状态',
        dataIndex: 'status',
        render: (status) => {
          return status || '未知状态'
        }
      }, {
        title: '有效期',
        dataIndex: 'validity',
        width: '170px',
      },
      {
        title: '操作',
        render: (text, record) => {
          return <div className="table-action">
            <a href="javascript:void(0)" >编辑</a>
            <Popconfirm title="确认删除?"
                        okText="确认删除"
                        cancelText="取消"
                        onCancel={(e)=>{
                          console.log(e)
                        }}
                        onConfirm={this.delQuestion.bind(this,record)}
            >
              <a href="javascript:void(0)">删除</a>
            </Popconfirm>
            <a href="javascript:void(0)" >停用</a>
          </div>
        }
      }
    ];

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
          <div className="panel_filter_addon">
            <Form layout="inline">
              <Form.Item>
                <Input.Search style={{width: 200}} onChange={this.onSearchChange} onSearch={this.onSearch}
                        placeholder="输入关键字，回车检索" value={'kew'}/>
              </Form.Item>
              <Form.Item>
                <Select
                  showSearch allowClear
                  style={{width: 200}}
                  placeholder="编辑人"
                  optionFilterProp="children"

                  value={''}
                  onChange={v=>console.log(v)}

                >
                  <Select.Option key={''} value={''}>cc</Select.Option>
                  <Select.Option key={'1'} value={'v1'}>cc</Select.Option>
                  <Select.Option key={'2'} value={'v2'}>cc</Select.Option>
                  <Select.Option key={'3'} value={'v3'}>cc</Select.Option>
                </Select>
              </Form.Item>


            </Form>
          </div>

        </div>
      </section>
      <div className={"panel_body"}>
        <Table dataSource={dataSource} columns={columns}rowSelection={rowSelection}bordered onChange={(pagination, filters, sorter) => {
          //fetch service
          console.log(pagination)
        }} />
      </div>
    </div>
  }
}
