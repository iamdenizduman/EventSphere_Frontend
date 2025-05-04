import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useLoginUser } from '../../hooks/user/useLoginUser';
import { useAuth } from '../../contexts/AuthContext.jsx';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const loginMutation = useLoginUser();

  const onFinish = (values) => {
    loginMutation.mutate(values, {
      onSuccess: (res) => {
        if (res.data.resultStatus == 1) {
          openNotification('top');
        } else {
          const token = res.data.data.accessToken.token;
          login(token);
          navigate('/');
        }
      },
    });
  };

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.error({
      message: `Giriş Başarısız`,
      description: 'Email veya şifre hatalı',
      placement,
    });
  };

  return (
    <div className='min-h-screen bg-event bg-login bg-cover bg-center flex items-center justify-center'>
      {contextHolder}
      <div className='backdrop-blur-sm bg-white/80 p-8 rounded-2xl shadow-xl w-full max-w-md'>
        <h2 className='text-3xl font-bold text-center text-indigo-800 mb-6'>
          Login
        </h2>
        <Form layout='vertical' onFinish={onFinish}>
          <Form.Item
            name='email'
            label='Email'
            rules={[{ required: true, message: 'Please enter your mail!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder='Email' />
          </Form.Item>

          <Form.Item
            name='password'
            label='Password'
            rules={[{ required: true, message: 'Please enter your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder='Password' />
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='w-full bg-indigo-600 hover:bg-indigo-700'
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
        <p className='text-center text-sm text-gray-600'>
          Don't have an account?{' '}
          <a href='#' className='text-indigo-600'>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
