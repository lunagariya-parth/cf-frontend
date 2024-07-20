import { Form, Input } from 'antd'
import { Button } from '../components/ant'
import { Link } from 'react-router-dom'

type FieldType = {
  username?: string
  password?: string
}
function SignUp() {
  return (
    <div className="auth-form">
      <h2 className="form-heading">Sign Up</h2>
      <Form
        layout="vertical"
        name="SignUpForm"
        style={{ width: '100%', maxWidth: 450 }}
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Enter Username" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Enter Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            SignUp
          </Button>
        </Form.Item>
      </Form>
      <p className="auth-text">
        Already have account? <Link to="/sign-up">Log In</Link>
      </p>
    </div>
  )
}

export default SignUp
