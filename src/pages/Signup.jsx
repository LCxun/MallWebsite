import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, FormGroup } from 'reactstrap'
import { Button, Input, Form } from 'antd';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import '../style/login.css'

const Signup = () => {

  const [values, setValues] = useState({
    name: '',
    password: '',
    email: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] })
  }
  const handleSubmit = (e) => {
    // e.preventDefault()
    axios.post('http://3.94.201.55:8081/signup', values)
      .then(res => {
        if (res.data === 'Error') {
          // console.log('请求发生错误')
          toast.error('注册失败')
        } else {
          // console.log(res);
          toast.success('注册成功')
          navigate('/login')
        }
      })

  }


  return (
    <Helmet title='Signup'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>注册</h3>

              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 10,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={handleSubmit}
              >
                <Form.Item
                  label="用户名"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: '请输入用户名！',
                    },
                  ]}
                >
                  <Input name='name' onChange={handleChange} />
                </Form.Item>

                <Form.Item
                  label="密码"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: '请输入密码',
                    },
                  ]}
                >
                  <Input.Password name='password' onChange={handleChange} />
                </Form.Item>

                <Form.Item
                  label="邮箱"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: '请输入邮箱',
                    },
                  ]}
                >
                  <Input name='email' onChange={handleChange} />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 4,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    注册
                  </Button>
                  <p style={{ 'color': '#000' }}>已有账号? <Link to='/signup' >登录</Link> </p>
                </Form.Item>
              </Form>

            </Col>
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Signup;