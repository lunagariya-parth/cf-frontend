import { Flex, Form, Input } from 'antd'
import { Button } from '../components/ant'
import { Link } from 'react-router-dom'

type FieldType = {
  username?: string
  password?: string
}
function LogIn() {
  return (
    <div className="auth-form">
      <h2 className="form-heading">Welcome to CodeFusion</h2>
      <Form
        layout="vertical"
        name="loginForm"
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
        <Flex justify='end'>
          <Link className='link' to="/forgot-password">Forgot-password?</Link>
        </Flex>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
      <p className="auth-text">
        Don't have account? <Link to="/sign-up">Sign Up</Link>
      </p>
    </div>
  )
}

export default LogIn
