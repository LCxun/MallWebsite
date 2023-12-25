import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../style/login.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { setToken } from '../routers/Token'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { Button,  Input,Form } from 'antd';


const Login = () => {

  const [values, setValues] = useState({
    username: '',
    password: ''
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const [errors, setErrors] = useState({})

  const handleInput = (e) => {
    // console.log(values);
    setValues(prev => ({ ...prev, [e.target.name]: [e.target.value] }))
  }



  const handleSubmit = (e) => {
    // e.preventDefault()
    // setErrors(validation(values))
    axios.post('http://website-mall-env.us-east-1.elasticbeanstalk.com/login', values)
      .then(res => {
        // console.log(res);
        if (res.data.message === 'Login successful') {
          toast.success('登录成功')
          // console.log(res.data.userEmail);
          dispatch(cartActions.showUserName(res.data.userName))
          navigate('/home')
        } else {
          // console.log(values);
          toast.error('登录失败')
        }
        if (res.data.token) {
          setToken(res.data.token)
        }
      })
      .catch(err => console.log(err))

  }

  return (
    <Helmet title='Login'>
      
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>登录</h3>

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
                  <Input name='username' onChange={handleInput} />
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
                  <Input.Password name='password' onChange={handleInput} />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 4,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    登录
                  </Button>
                  <p style={{'color':'#000'}}>没有账号? <Link to='/signup' >注册一个新账号</Link> </p>
                </Form.Item>
              </Form>

            </Col>
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Login