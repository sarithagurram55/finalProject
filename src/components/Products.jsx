import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Divider, message } from "antd";
import { useNavigate } from "react-router-dom";

export default function Products() {
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    // Fetch products from API
    useEffect(() => {
        const userId = localStorage.getItem("userId");

        if (!userId) {
            message.error("Please log in to access products.");
            navigate("/shoperLog");
            return;
        }

        async function getProducts() {
            try {
                const response = await axios.get("http://localhost:5000/api/v1/users/get-products");
                setProduct(response.data.data);
                console.log(response.data.data);
            } catch (error) {
                console.error("Error fetching products:", error);
                message.error("Failed to fetch products.");
            }
        }

        getProducts();
    }, [navigate]);

    const handleAddToCart = async (prod) => {
        const userId = localStorage.getItem("userId");

        if (!userId) {
            message.error("Please log in to add items to your cart.");
            navigate("/shoperLog");
            return;
        }

        try {
            // Increment quantity in cartItems if already exists or set to 1 if new
            const currentQuantity = cartItems.find((item) => item.productId === prod._id)?.quantity || 0;

            const response = await axios.post("http://localhost:5000/api/v1/cart/add", {
                userId,
                productId: prod._id,
                productName: prod.name,
                productPrice: prod.price,
                quantity: currentQuantity + 1,
                productImgURL: prod.img, 
            });

            if (response.status === 200) {
                message.success("Product added to cart successfully!");

                // Fetch updated cart after adding product
                const cartResponse = await axios.get(`http://localhost:5000/api/v1/cart/${userId}`);
                setCartItems(cartResponse.data.cart);  // Update cartItems state
            } else {
                message.error("Failed to add product to cart.");
            }
        } catch (error) {
            console.error("Error adding product to cart:", error);
            message.error(error.response?.data?.error || "Failed to add product to cart.");
        }
    };

    return (
        <div>
            <div className="pro">
                <div>
                    <input
                        type="text"
                        placeholder="Search for Items"
                        style={{
                            backgroundColor: "pink",
                            borderRadius: "20px",
                            margin: "25px 2px 10px",
                            height: "2rem",
                        }}
                    />
                    <Divider type="horizontal" style={{ borderColor: "black", width: "30%" }} />
                    {/* <h2>Category</h2>
                    <div className="cat">
                        {[...new Set(product.map((prod) => prod.category))].map((category, index) => (
                            <button key={index}>{category}</button>
                        ))}
                    </div> */}
                    <Button
                        type="primary"
                        style={{ marginTop: "2.5rem" }}
                        onClick={() => navigate("/cart", { state: { cartItems } })}
                    >
                        Go to Cart
                    </Button>
                </div>
                <div>
                    <Divider type="vertical" style={{ borderColor: "black", height: "100vh" }} />
                </div>
                <div>
                    <h1 style={{ margin: "20px" }}>SELECT A PRODUCT AND ADD TO CART</h1>
                    <div className="products">
                        {product.map((prod) => (
                            <Card key={prod._id} className="prod">
                                <img src={prod.img} height="50px" alt={prod.name} />
                                <p>{prod.name}</p>
                                <p style={{ color: "green" }}>${prod.price}</p>
                                <Button
                                    type="primary"
                                    style={{
                                        borderRadius: "20px",
                                        fontSize: "10px",
                                        marginTop: "5px",
                                        height: "18px",
                                    }}
                                    onClick={() => handleAddToCart(prod)}
                                >
                                    Add to cart
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

  // Function to handle adding products to the cart
//   const handleAddToCart = (prod) => {
//     setCartItems((prevCartItems) => ({
//         ...prevCartItems,
//         [prod._id]: {
//             ...prod,
//             quantity: prevCartItems[prod._id]
//                 ? prevCartItems[prod._id].quantity + 1
//                 : 1,
//         },
//     }));
// };


