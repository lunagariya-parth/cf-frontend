import { Form, Input } from 'antd'
import { Button } from '../components/ant'

type FieldType = {
  username?: string
  password?: string
}
function ForgotPassword() {
  return (
    <Form
      layout="vertical"
      name="ForgotPasswordForm"
      style={{ width: '100%', maxWidth: 450 }}
    >
      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please enter password!' }]}
      >
        <Input.Password placeholder="Enter Password" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please enter password!' }]}
      >
        <Input.Password placeholder="confirm Password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Reset Password
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ForgotPassword
