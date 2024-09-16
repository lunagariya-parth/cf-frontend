import { Row, Form, Input } from 'antd'; // Assuming you meant to use Row instead of Flex
import { Button } from '../components/ant'; // Custom Button component
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

type FieldType = {
  username?: string;
  password?: string;
};

function LogIn() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const onFinish = (values: FieldType) => {
    const { username, password } = values;

    if (username === 'user' && password === 'pass') {
      //console.log('Form Data:', values);
      authContext?.makeValid;
      localStorage.setItem('isValid',"true");
      navigate('/dashboard'); 
      
    } else {
      console.log('Invalid credentials');
      localStorage.setItem('isValid',"false");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="auth-form">
      <h2 className="form-heading">Welcome to CodeFusion</h2>
      <Form
        layout="vertical"
        name="loginForm"
        style={{ width: '100%', maxWidth: 450 }}
        onFinish={onFinish} // Handle form submission
        onFinishFailed={onFinishFailed} // Handle submission errors
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

        <Row justify="end">
          <Link className="link" to="/forgot-password">
            Forgot password?
          </Link>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>

      <p className="auth-text">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default LogIn;
