
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Divider, Form, Select,message } from "antd";
import { useNavigate } from "react-router-dom";

import immg from '../assets/performance.png';

import SellerNav from '../components/SellerNav';

export default function SellerPer(){
    const navigate = useNavigate();

    const [product, setProduct] = useState([]); // Products from API
    const [selectedProduct, setSelectedProduct] = useState(null); 
    
    const { Option } = Select;

    useEffect(() => {
        async function getProducts() {
            const response = await axios.get("http://localhost:5000/api/v1/users/get-products");
            setProduct(response.data.data);
            console.log(response.data.data);
        }
        getProducts();
    }, []);

    const onDelete = async (productId) => {
        try {
            const response = await axios.delete(
                `http://localhost:5000/api/v1/users/delete-products/${productId}` // Corrected delete API endpoint
            );
            console.log("Product deleted successfully:", response.data);
            message.success("Product deleted successfully!");
            setProduct((prevProducts) => prevProducts.filter((prod) => prod._id !== productId));
            // setProduct((prevProducts) => prevProducts.filter((prod) => prod._id !== productId));
            // setProduct(product.filter((prod) => prod._id !== productId));
        } catch (error) {
            console.error("Error deleting product:", error);
            message.error("Failed to delete product. Please try again.");
        }
    };
    return(
        <div>
            <SellerNav />
            <div className="aa">
                <div>
                    <h2><em>SALES PERFORMANCE</em></h2>
                    <img src={immg} />
                    <h3><em>THIS MONTH GOAL</em></h3>
                    <div style={{margin:'2rem 0 0 3rem'}} className="goal">
                        <div className="goals"></div>
                    </div>
                </div>
                <div>
                <Divider type="vertical" style={{borderColor: 'black',height:"100vh"}} />
                </div>
                <div>
                    <div className="bb">
                        <h2><em>YOUR PRODUCTS</em></h2>
                        <Button onClick={()=>navigate('/sellerPrew')}>Add New Product</Button>
                    </div>
                    <div className="productss">
                        {product.map((prod) => (
                            <Card key={prod._id} className="prod">
                                <img src={prod.img} height="50px" alt={prod.title} />
                                <p>{prod.name}</p>
                                <p style={{ color: "green" }}>${prod.price}</p>
                                <div style={{display:'flex', justifyContent:'space-between',marginTop:'10px'}}>
                                    <Button onClick={()=>navigate('/sellerEdit',{ state: { product: prod } })} className="per" style={{backgroundColor:'rgb(87, 87, 220)'}}>Edit</Button>
                                    <Button onClick={() => onDelete(prod._id)} className="per" style={{backgroundColor:'rgb(169, 74, 74)'}}>Delete</Button>
                                </div>
                            </Card>
                        ))}
                    </div>    
                </div>
            </div>
        </div>
    )
}



