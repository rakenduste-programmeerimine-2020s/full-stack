import React, { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';

const TopicForm = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = async (values) => {
    console.log('Finish:', values);
  };

  return (
    <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish} >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'Please add topic title!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item shouldUpdate={true}>
      {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={ 
              !form.isFieldsTouched(true) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Save
          </Button>
        )}
      </Form.Item>
    </Form>
  )
};

export default TopicForm;