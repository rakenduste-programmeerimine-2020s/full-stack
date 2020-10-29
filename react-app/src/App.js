import React, { useEffect, useState } from 'react';
import { Layout, Row, Col } from 'antd';
import axios from 'axios';

import TopicForm from './components/TopicForm';
import TopicTable from './components/TopicTable';

import './App.css';

const { Header, Content } = Layout;

const App = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3000/topics');
    setData(response.data)
  }

  useEffect(() => {
    fetchData()
  }, []);

  const saveTopic = async (name) => {
    const response = await axios.post('http://localhost:3000/topics', { name });
    // setData([response.data, ...data])
    await fetchData()
    return response.data;
  }

  const deleteTopic = async (_id) => {
    await axios.delete(`http://localhost:3000/topics/${_id}`);
    await fetchData()
  }

  return (
    <Layout>
      <Header className={'App-header'}>App</Header>
      <Content className={'App-content'}>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <TopicForm saveTopic={saveTopic} />
          </Col>
          <Col xs={24} md={12}>
            <TopicTable topics={data} deleteTopic={deleteTopic} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;