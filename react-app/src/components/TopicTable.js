import React from 'react';
import { Table, Button } from 'antd';

const TopicTable = ({ topics }) => {  

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
      render: (_id, record) => (
       <Button>Archive</Button> 
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