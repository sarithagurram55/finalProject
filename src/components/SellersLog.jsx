import React, { useState } from "react";
import axios from "axios";
import sell from '../assets/seller.png';

import { Row, Col, Button, Form, Input, Card, message } from 'antd';
import { useNavigate } from "react-router-dom";

export default function SellersLog() {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false); // State for loading spinner

    const handleSignin = async (values) => {
        setLoading(true); // Show loading spinner
        try {
            const { email, password } = values;
            const response = await axios.post(
                'http://localhost:5000/sell-signin',
                { email, password },
                { withCredentials: true }
            );

            if (response.status === 200) {
                console.log("Signin success:", response.data);
                message.success("Login successful! Redirecting...");
                navigate('/sellerPer'); // Navigate to the dashboard/home page
            }
        } catch (error) {
            console.error('Signin failed:', error.response?.data || error.message);
            message.error(error.response?.data?.error || "Signin failed. Please try again.");
        } finally {
            setLoading(false); // Hide loading spinner
        }
    };

    return (
        <div>
            <Row style={{ backgroundColor: 'rgb(240, 229, 229)', padding: '20px' }}>
                <Col xs={24} sm={12} style={{ textAlign: 'center' }}>
                    <div>
                        <img src={sell} alt="Seller illustration" width="500px" />
                        <Button 
                            onClick={() => navigate('/shoperLog')} 
                            style={{ marginTop: '20px' }}
                        >
                            Go to Shoppers Login
                        </Button>
                    </div>
                </Col>
                <Col xs={24} sm={12}>
                    <Card className="card" style={{ padding: '20px' }}>
                        <Form 
                            form={form}
                            onFinish={handleSignin}
                            layout="vertical"
                        >
                            <p style={{ color: '#333', marginBottom: '30px', textAlign: 'center' }}>
                                Login and start shopping from your favorite<br />brands. Refer a friend and save 50% OFF
                            </p>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                    {
                                        type: "email",
                                        message: "Please enter a valid email!",
                                    },
                                ]}
                            >
                                <Input placeholder="Login Email" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password placeholder="Password" />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="btn"
                                    loading={loading} // Show spinner during request
                                    block
                                >
                                    Shoppers Login
                                </Button>
                            </Form.Item>
                            <p style={{ color: '#333', textAlign: 'center' }}>
                                Don't have an account?{' '}
                                <a onClick={() => navigate('/sellers')} style={{ cursor: 'pointer', color: '#1890ff' }}>
                                    Create Account
                                </a>
                            </p>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
