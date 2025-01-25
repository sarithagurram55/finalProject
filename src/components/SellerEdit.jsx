import React, { useEffect } from "react";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import SellerNav from "../components/SellerNav";
import immg from '../assets/img.png';
import { useLocation } from "react-router-dom";

export default function SellerEdit() {
    const [form] = Form.useForm();
    const location = useLocation();
    const productDetails = location.state?.product;

    // useEffect(() => {
    //     if (productDetails) {
    //         form.setFieldsValue(productDetails); // Pre-fill form fields with product details
    //     }
    // }, [productDetails, form]);

    useEffect(() => {
        if (productDetails) {
            // Map img to imgURL if necessary
            const formattedDetails = {
                ...productDetails,
                imgURL: productDetails.img || productDetails.imgURL, // Ensure imgURL gets value from img if needed
            };
            form.setFieldsValue(formattedDetails); // Pre-fill form fields with product details
        }
    }, [productDetails, form]);

    // Submit handler for updating the product
    const onSubmit = async (values) => {
        try {
            const response = await axios.put(
                `http://localhost:5000/api/v1/users/update-products/${productDetails._id}`, // Update API endpoint
                values
            );
            console.log("Product updated successfully:", response.data);
            message.success("Product updated successfully!");
        } catch (error) {
            console.error("Error updating product:", error);
            message.error("Failed to update product. Please try again.");
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
                        label="Product Title"
                        name="name"
                        rules={[{ required: true, message: "Please enter the product title" }]}
                    >
                        <Input placeholder="Product Title" />
                    </Form.Item>

                    <Form.Item
                        label="Product Description"
                        name="description"
                        rules={[{ required: true, message: "Please enter the product description" }]}
                    >
                        <Input.TextArea placeholder="Product Description" />
                    </Form.Item>

                    <div style={{ display: "flex", gap: "10px" }}>
                        <Form.Item
                            label="Price"
                            name="price"
                            rules={[{ required: true, message: "Please enter the product price" }]}
                        >
                            <Input placeholder="Product Price" type="number" />
                        </Form.Item>

                        <Form.Item
                            label="Discount"
                            name="discount"
                            rules={[{ message: "Please enter the product discount (optional)" }]}
                        >
                            <Input placeholder="Product Discount" type="number" />
                        </Form.Item>
                    </div>

                    <Form.Item
                        label="Category"
                        name="category"
                        rules={[{ required: true, message: "Please enter the product category" }]}
                    >
                        <Input placeholder="Product Category" />
                    </Form.Item>

                    <Form.Item
                        label="Image URL"
                        name="imgURL"
                        rules={[{ required: true, message: "Please enter the product image URL" }]}
                    >
                        <Input placeholder="Product Image URL" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Update the Product
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
