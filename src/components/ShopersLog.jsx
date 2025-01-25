import React, { useState } from "react";
import axios from "axios";
import log from '../assets/login.png';
import { Row, Col, Button, Form, Input, Card, message } from 'antd';
import { useNavigate } from "react-router-dom";

export default function ShopersLog() {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false); // State for loading indicator

    const handleSignin = async (values) => {
        setLoading(true); // Show loading spinner
        try {
            const { email, password } = values;
            const response = await axios.post(
                'http://localhost:5000/signin',
                { email, password },
                { withCredentials: true }
            );

            if (response.status === 200) {
                console.log("Signin success:", response.data); // Log the response data

                // Check if user data exists
                const { userId, email } = response.data;
                if (!userId) {
                    message.error("No userId received. Please try again.");
                    return;
                }

                // Log the userId and email to console
                console.log("User data:", { userId, email });

                // Store userId in localStorage
                localStorage.setItem("userId", userId);

                // Log the userId to confirm it's set correctly
                console.log("Stored userId:", userId);

                message.success("Login successful! Redirecting...");
                navigate('/home'); // Navigate to the home page
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
            <Row style={{ backgroundColor: 'rgb(240, 229, 229)' }}>
                <Col className="one">
                    <div className="ten">
                        <img src={log} width="500px" alt="Shopers Login" />
                        <Button className="two" onClick={() => navigate('/sellerLog')}>
                            Go to Sellers Login
                        </Button>
                    </div>
                </Col>
                <Col>
                    <Card className="card">
                        <Form
                            form={form}
                            onFinish={handleSignin}
                            layout="vertical"
                        >
                            <p style={{ color: 'white', marginBottom: '30px' }}>
                                Login and start shopping from your favorite
                                <br />
                                brands. Refer a friend and save 50% OFF
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
                                >
                                    Shopers Login
                                </Button>
                            </Form.Item>
                            <p style={{ color: 'white', textAlign: 'center' }}>
                                <a href="#" onClick={(e) => { e.preventDefault(); navigate('/shopers'); }} >
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





// import React, { useState } from "react";
// import axios from "axios";
// import log from '../assets/login.png';
// import { Row, Col, Button, Form, Input, Card, message } from 'antd';
// import { useNavigate } from "react-router-dom";

// export default function ShopersLog() {
//     const navigate = useNavigate();
//     const [form] = Form.useForm();
//     const [loading, setLoading] = useState(false); // State for loading indicator

//     const handleSignin = async (values) => {
//         setLoading(true); // Show loading spinner
//         try {
//             const { email, password } = values;
//             const response = await axios.post(
//                 'http://localhost:5000/signin',
//                 { email, password },
//                 { withCredentials: true }
//             );

//             if (response.status === 200) {
//                 console.log("Signin success:", response);
//                 message.success("Login successful! Redirecting...");
//                 const { userId } = response.data; // Get the userId from the response

//                 if (!userId) {
//                     message.error("No userId received. Please try again.");
//                     return;
//                 }

//                 // Store userId in localStorage
//                 localStorage.setItem("userId", userId);

//                 // Log the userId to confirm it's set correctly
//                 console.log("Stored userId:", userId);

//                 navigate('/home'); // Navigate to the home page
//             }
//         } catch (error) {
//             console.error('Signin failed:', error.response?.data || error.message);
//             message.error(error.response?.data?.error || "Signin failed. Please try again.");
//         } finally {
//             setLoading(false); // Hide loading spinner
//         }
//     };

//     return (
//         <div>
//             <Row style={{ backgroundColor: 'rgb(240, 229, 229)' }}>
//                 <Col className="one">
//                     <div className="ten">
//                         <img src={log} width="500px" alt="Shopers Login" />
//                         <Button className="two" onClick={() => navigate('/sellerLog')}>
//                             Go to Sellers Login
//                         </Button>
//                     </div>
//                 </Col>
//                 <Col>
//                     <Card className="card">
//                         <Form
//                             form={form}
//                             onFinish={handleSignin}
//                             layout="vertical"
//                         >
//                             <p style={{ color: 'white', marginBottom: '30px' }}>
//                                 Login and start shopping from your favorite
//                                 <br />
//                                 brands. Refer a friend and save 50% OFF
//                             </p>
//                             <Form.Item
//                                 name="email"
//                                 rules={[
//                                     {
//                                         required: true,
//                                         message: 'Please input your email!',
//                                     },
//                                     {
//                                         type: "email",
//                                         message: "Please enter a valid email!",
//                                     },
//                                 ]}
//                             >
//                                 <Input placeholder="Login Email" />
//                             </Form.Item>
//                             <Form.Item
//                                 name="password"
//                                 rules={[
//                                     {
//                                         required: true,
//                                         message: 'Please input your password!',
//                                     },
//                                 ]}
//                             >
//                                 <Input.Password placeholder="Password" />
//                             </Form.Item>
//                             <Form.Item>
//                                 <Button
//                                     type="primary"
//                                     htmlType="submit"
//                                     className="btn"
//                                     loading={loading} // Show spinner during request
//                                 >
//                                     Shopers Login
//                                 </Button>
//                             </Form.Item>
//                             <p style={{ color: 'white', textAlign: 'center' }}>
//                                 <a href="#" onClick={(e) => { e.preventDefault(); navigate('/shopers'); }}>
//                                     Create Account
//                                 </a>
//                             </p>
//                         </Form>
//                     </Card>
//                 </Col>
//             </Row>
//         </div>
//     );
// }




// import React, { useState } from "react";
// import axios from "axios";
// import log from '../assets/login.png';
// import { Row, Col, Button, Form, Input, Card, message } from 'antd';
// import { useNavigate } from "react-router-dom";

// export default function ShopersLog() {
//     const navigate = useNavigate();
//     const [form] = Form.useForm();
//     const [loading, setLoading] = useState(false); // State for loading indicator

//     const handleSignin = async (values) => {
//         setLoading(true); // Show loading spinner
//         try {
//             const { email, password } = values;
//             const response = await axios.post(
//                 'http://localhost:5000/signin',
//                 { email, password },
//                 { withCredentials: true }
//             );

//             if (response.status === 200) {
//                 console.log("Signin success:", response.data);
//                 message.success("Login successful! Redirecting...");
//                 const { userId } = response.data; // Get the userId from the response

//             // Store userId in localStorage
//                  localStorage.setItem("userId", userId);
//                 navigate('/home'); // Navigate to the home page
//             }
//         } catch (error) {
//             console.error('Signin failed:', error.response?.data || error.message);
//             message.error(error.response?.data?.error || "Signin failed. Please try again.");
//         } finally {
//             setLoading(false); // Hide loading spinner
//         }
//     };

//     return (
//         <div>
//             <Row style={{ backgroundColor: 'rgb(240, 229, 229)' }}>
//                 <Col className="one">
//                     <div className="ten">
//                         <img src={log} width="500px" alt="Shopers Login" />
//                         <Button className="two" onClick={() => navigate('/sellerLog')}>
//                             Go to Sellers Login
//                         </Button>
//                     </div>
//                 </Col>
//                 <Col>
//                     <Card className="card">
//                         <Form
//                             form={form}
//                             onFinish={handleSignin}
//                             layout="vertical"
//                         >
//                             <p style={{ color: 'white', marginBottom: '30px' }}>
//                                 Login and start shopping from your favorite
//                                 <br />
//                                 brands. Refer a friend and save 50% OFF
//                             </p>
//                             <Form.Item
//                                 name="email"
//                                 rules={[
//                                     {
//                                         required: true,
//                                         message: 'Please input your email!',
//                                     },
//                                     {
//                                         type: "email",
//                                         message: "Please enter a valid email!",
//                                     },
//                                 ]}
//                             >
//                                 <Input placeholder="Login Email" />
//                             </Form.Item>
//                             <Form.Item
//                                 name="password"
//                                 rules={[
//                                     {
//                                         required: true,
//                                         message: 'Please input your password!',
//                                     },
//                                 ]}
//                             >
//                                 <Input.Password placeholder="Password" />
//                             </Form.Item>
//                             <Form.Item>
//                                 <Button
//                                     type="primary"
//                                     htmlType="submit"
//                                     className="btn"
//                                     loading={loading} // Show spinner during request
//                                 >
//                                     Shopers Login
//                                 </Button>
//                             </Form.Item>
//                             <p style={{ color: 'white', textAlign: 'center' }}>
//                                 <a href="#" onClick={(e) => { e.preventDefault(); navigate('/shopers'); }}>
//                                     Create Account
//                                 </a>
//                             </p>
//                         </Form>
//                     </Card>
//                 </Col>
//             </Row>
//         </div>
//     );
// }
