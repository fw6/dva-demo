import React from 'react'

import { Table, Popconfirm } from 'antd'

const UserList = ({ total, current, loading, dataSource }) => {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: '操作',
      key: 'operation',
      render: (text, record) => (
        <p>
          <a onClick={() => {}}>编辑</a>
          &nbsp;
          <Popconfirm title="确认要删除吗？" onConfirm={() => {}}>
            <a>删除</a>
          </Popconfirm>
        </p>
      )
    }
  ]

  // 定义分页对象
  const pagination = {
    total,
    current,
    pageSize: 10,
    onChange: () => {}
  }

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={record => record.id}
        pagination={pagination}
        locale={{ emptyText: '😲 暂无数据' }}
      />
    </>
  )
}

export default UserList
