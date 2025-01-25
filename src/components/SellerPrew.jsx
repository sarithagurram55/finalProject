import React from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import SellerNav from "../components/SellerNav";
import immg from '../assets/img.png';
export default function SellerPrew() {
    const [form] = Form.useForm();

    // Submit handler for the form
    const onSubmit = async (values) => {
        try {
            const { name, description, price, discount, category, imgURL } = values;
            const response = await axios.post(
                "http://localhost:5000/api/v1/users/add-products",
                { name, description, price, discount, category, imgURL }
            );
            console.log("Product added successfully:", response.data);
            // Reset the form after successful submission
            form.resetFields();
        } catch (error) {
            console.error("Error adding product:", error.message);
            alert("Failed to add product. Please check the input and try again.");
        }
    };

    return (
        <div>
            <SellerNav />
            <div style={{display:'flex',alignItems:'center'}}>
            <div className="formEle" style={{ padding: "20px" }}>
                <Form 
                    form={form} 
                    onFinish={onSubmit} 
                    layout="vertical"
                    style={{ maxWidth: "600px", margin: "0 auto" }}
                >
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: "Please enter the product title" }]}
                    >
                        <Input placeholder="Product Title" />
                    </Form.Item>

                    <Form.Item
                        name="description"
                        rules={[{ required: true, message: "Please enter the product description" }]}
                    >
                        <Input.TextArea placeholder="Product Description" />
                    </Form.Item>

                    <div style={{ display: "flex", gap: "10px" }}>
                        <Form.Item
                            name="price"
                            rules={[{ required: true, message: "Please enter the product price" }]}
                        >
                            <Input placeholder="Product Price" type="number" />
                        </Form.Item>

                        <Form.Item
                            name="discount"
                            rules={[{ message: "Please enter the product discount (optional)" }]}
                        >
                            <Input placeholder="Product Discount" type="number" />
                        </Form.Item>
                    </div>

                    <Form.Item
                        name="category"
                        rules={[{ required: true, message: "Please enter the product category" }]}
                    >
                        <Input placeholder="Product Category" />
                    </Form.Item>

                    <Form.Item
                        name="imgURL"
                        rules={[{ required: true, message: "Please enter the product image URL" }]}
                    >
                        <Input placeholder="Product Image URL" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Add Product
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div>
                <img src={immg}  />
            </div>
            </div>
        </div>
    );
}
