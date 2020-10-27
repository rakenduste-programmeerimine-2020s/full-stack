import React from 'react';
import { Layout, Row, Col } from 'antd';
import axios from 'axios';

import TopicForm from './components/TopicForm';
import TopicTable from './components/TopicTable';

import './App.css';

const { Header, Content } = Layout;

const App = () => {

  return (
    <Layout>
      <Header className={'App-header'}>App</Header>
      <Content className={'App-content'}>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <TopicForm/>
          </Col>
          <Col xs={24} md={12}>
            <TopicTable topics={[]}/>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;