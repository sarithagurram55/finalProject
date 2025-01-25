// import React from "react";
// import { useLocation } from "react-router-dom";

// export default function CartItem() {
//     const location = useLocation();
//     const cartItems = location.state?.cartItems || [];

//     return (
//         <div>
//             <h2>Purchased Items</h2>
//             {cartItems.length > 0 ? (
//                 <ul className="products">
//                     {cartItems.map((item) => (
//                         <li key={item.productId || item._id}>
//                             {/* Display product image */}
//                             <img
//                                 src={item.productImg}
//                                 alt={item.productName}
//                                 width="50"
//                                 style={{ marginRight: "10px" }}
//                             />
//                             <p>Name: {item.productName}</p>
//                             <p>Quantity: {item.quantity}</p>
//                             <p>Price: ${(item.productPrice * item.quantity).toFixed(2)}</p>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p>No items purchased.</p>
//             )}
//         </div>
//     );
// }





import React from "react";
import { useLocation } from "react-router-dom";

export default function CartItem() {
    const location = useLocation();
    const cartItems = location.state?.cartItems || [];

    return (
        <div>
            <h2>Purchased Items</h2>
            {cartItems.length > 0 ? (
                <ul className="products">
                    {cartItems.map((item) => (
                        <li key={item.productId || item._id}>
                            <img
                                src={item.productImgURL} // Use the correct property for image URL
                                alt={item.productName}
                                width="50"
                                style={{ marginRight: "10px" }}
                            />
                            <p>Name: {item.productName}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ${(item.productPrice * item.quantity).toFixed(2)}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No items purchased.</p>
            )}
        </div>
    );
}
