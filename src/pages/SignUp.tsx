import { Form, Input } from 'antd'
import { Button } from '../components/ant'
import { Link } from 'react-router-dom'

type FieldType = {
  username?: string
  password?: string
}
function SignUp() {
  return (
    <>
      <h2 className="form-heading">Welcome to CodeFusion</h2>
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
          <Button type="primary" htmlType="submit">
            SignUp
          </Button>
        </Form.Item>
      </Form>
      <p className="text-info">
        Already have account <Link to="/sign-up">Log In</Link>
      </p>
    </>
  )
}

export default SignUp
