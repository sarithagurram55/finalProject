// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Table, Button, message } from "antd";
// import axios from "axios";

// export default function Cart() {
//     const navigate = useNavigate();
//     const [cartItems, setCartItems] = useState([]);
//     const [totalPrice, setTotalPrice] = useState(0);

//     useEffect(() => {
//         async function fetchCartItems() {
//             try {
//                 const userId = localStorage.getItem("userId");
//                 if (!userId) {
//                     message.error("Please log in to view your cart.");
//                     navigate("/login");
//                     return;
//                 }

//                 const response = await axios.get(`http://localhost:5000/api/v1/cart/${userId}`);
//                 if (response.status === 200 && response.data.cart) {
//                     setCartItems(response.data.cart);
//                 } else {
//                     message.error("No cart items found.");
//                 }
//             } catch (error) {
//                 console.error("Error fetching cart items:", error);
//                 message.error(error.response?.data?.message || "Failed to fetch cart items.");
//             }
//         }

//         fetchCartItems();
//     }, [navigate]);

//     useEffect(() => {
//         const price = cartItems.reduce((acc, item) => acc + item.quantity * item.productPrice, 0);
//         setTotalPrice(price);
//     }, [cartItems]);

//     const columns = [
//         {
//             title: "Name",
//             dataIndex: "productName",
//             key: "productName",
//         },
//         {
//             title: "Quantity",
//             dataIndex: "quantity",
//             key: "quantity",
//         },
//         {
//             title: "Price",
//             dataIndex: "productPrice",
//             key: "productPrice",
//             render: (_, record) => `$${(record.quantity * record.productPrice).toFixed(2)}`,
//         },
//     ];

//     return (
//         <div>
//             <h2>Your Cart</h2>
//             {cartItems.length > 0 ? (
//                 <>
//                     <Table
//                         columns={columns}
//                         dataSource={cartItems.map((item) => ({
//                             ...item,
//                             key: item._id,
//                         }))}
//                         pagination={false}
//                     />
//                     <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
//                     <Button
//                         type="primary"
//                         onClick={() => navigate("/cartItem", { state: { cartItems } })}
//                     >
//                         Proceed to Purchase
//                     </Button>
//                 </>
//             ) : (
//                 <p>Your cart is empty.</p>
//             )}
//         </div>
//     );
// }





import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button, message } from "antd";
import axios from "axios";

export default function Cart() {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        async function fetchCartItems() {
            try {
                const userId = localStorage.getItem("userId");
                if (!userId) {
                    message.error("Please log in to view your cart.");
                    navigate("/login");
                    return;
                }

                const response = await axios.get(`http://localhost:5000/api/v1/cart/${userId}`);
                if (response.status === 200 && response.data.cart) {
                    console.log(response.data.cart);
                    setCartItems(response.data.cart);
                } else {
                    message.error("No cart items found.");
                }
            } catch (error) {
                console.error("Error fetching cart items:", error);
                message.error(error.response?.data?.message || "Failed to fetch cart items.");
            }
        }

        fetchCartItems();
    }, [navigate]);

    useEffect(() => {
        const price = cartItems.reduce((acc, item) => acc + item.quantity * item.productPrice, 0);
        setTotalPrice(price);
    }, [cartItems]);

    const columns = [
        {
            title: "Name",
            dataIndex: "productName",
            key: "productName",
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
        },
        {
            title: "Price",
            dataIndex: "productPrice",
            key: "productPrice",
            render: (_, record) => `$${(record.quantity * record.productPrice).toFixed(2)}`,
        },
    ];

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length > 0 ? (
                <>
                    <Table
                        columns={columns}
                        dataSource={cartItems.map((item) => ({
                            ...item,
                            key: item._id,
                        }))}
                        pagination={false}
                    />
                    <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                    <Button
                        type="primary"
                        onClick={() => navigate("/cartItem", { state: { cartItems } })}
                    >
                        Proceed to Purchase
                    </Button>
                </>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}





