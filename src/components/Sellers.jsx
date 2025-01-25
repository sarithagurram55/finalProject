import React from "react";
import axios from "axios";
import sell from '../assets/seller.png'

import { Row, Col, Button,Form, Input ,Card} from 'antd';
import { Navigate, useNavigate } from "react-router-dom";

export default function Sellers(){
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const handleSubmit = async (values) => {
        try {
            const { email, password } = values; // Extract values from form
            const response = await axios.post('http://localhost:5000/sell-signup',{
                email,
                password,
            });
            console.log(response.data);
            navigate('/sellerLog')
            // Redirect to signin after successful signup
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return(
        <div>
            <Row style={{backgroundColor: 'rgb(240, 229, 229)'}}>
                <Col className="one">
                    <div className="ten">
                        <img src={sell} width='500px' />
                        <Button onClick={()=>navigate('/shoperLog')} className="two">Go to Shopers Login</Button>
                    </div>
                </Col>
                <Col style={{}}>
                    <Card className="card" style={{height:'24rem'}}>
                        <Form  form={form}
                            onFinish={handleSubmit} // Use onFinish instead of onSubmit
                            layout="vertical">
                            <p style={{color:'white', marginBottom:'30px'}}>Login and start shopping from your favorite<br/>brands. Refer a friend and save 50% OFF</p>
                            <Form.Item name="email"
                            rules={[
                                {
                                required: true,
                                message: 'please enter your email'
                                },
                            ]}>
                            <Input  placeholder= "Login Email"/>
                            </Form.Item>
                            <Form.Item name="password"
                            rules={[
                                {
                                required: true,
                                message: 'Please input your password!',
                                },
                            ]}>
                            <Input.Password  placeholder= "Password" />
                            </Form.Item>
                            <Form.Item name="rePassword"
                            rules={[
                                {
                                required: true,
                                message: 'Please input your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Passwords do not match!'));
                                    },
                                }),
                            ]}>
                            <Input.Password  placeholder= "Re-Enter Password" />
                            </Form.Item>
                            <Form.Item>
                               <Button type="primary" htmlType="submit" className="btn" >Create</Button>
                            </Form.Item>
                            <p style={{color:'white', textAlign:'center'}}><a onClick={()=> navigate('/sellerLog')}>Login</a></p>
                        </Form>
                    </Card>   
                </Col>
            </Row>
        </div>
    )
}