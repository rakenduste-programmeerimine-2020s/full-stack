import React, { useEffect, useState } from 'react';
import { Form, Input, Button, notification } from 'antd';

const TopicForm = ({ saveTopic }) => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = async (values) => {
    console.log('Finish:', values);
    setLoading(true)

    let data;

    try {
      data = await saveTopic(values.title)
      notification.success({ message: "Saved" })
      form.resetFields()
    } catch {
      notification.error({ message: "Error" })
    }

    setLoading(false)
    console.log(data)
  };

  return (
    <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish} >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'Please add topic title!' }]}
      >
        <Input disabled={loading} />
      </Form.Item>

      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
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