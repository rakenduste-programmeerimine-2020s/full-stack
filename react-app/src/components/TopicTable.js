import React from 'react';
import { Table, Button, Popconfirm } from 'antd';

const TopicTable = ({ topics, deleteTopic }) => {  

  const columns = [
    {
      title: 'Title',
      dataIndex: 'name'
    },
    {
      title: 'Created',
      dataIndex: 'createdAt'
    },
    {
      title: 'Archive',
      key: '_id',
      dataIndex: '_id',
      render: (_id, record) => (
        <Popconfirm 
          title='Are you sure?' 
          onConfirm={() => deleteTopic(_id)}
        >
          <Button>Archive</Button>
        </Popconfirm> 
      )
    },
  ];
  
  return (
    <Table 
      tableLayout={'auto'} 
      pagination={false} 
      columns={columns} 
      dataSource={topics} 
      rowKey="_id" 
    />
  )
};

export default TopicTable;