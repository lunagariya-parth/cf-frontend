import { Form, Input } from 'antd'
import { Button } from '../components/ant'

type FieldType = {
  repassword?: string
  password?: string
}
function ForgotPassword() {
  return (
    <div className="auth-form"><h2>Forgot Password</h2><Form
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
              label="Confirm Password"
              name="repassword"
              rules={[{ required: true, message: 'Please enter password!' }]}
          >
              <Input.Password placeholder="confirm Password" />
          </Form.Item>

          <Form.Item>
              <Button type="primary" htmlType="submit" block>
                  Reset Password
              </Button>
          </Form.Item>
      </Form></div>
  )
}

export default ForgotPassword
