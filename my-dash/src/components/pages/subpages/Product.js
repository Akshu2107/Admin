import React from 'react';

// const Product = ({ product }) => {

//     return (
//         // <div className="d-flex">
//         // <div className="product col-4">
//         {/* <h3>{product.name}</h3>
//             <img src={product.image} alt={product.name} className="product-image w-25 h-25" />
//             <p>Price: ${product.price}</p>
//             <p>Description: {product.description}</p>
//         </div> */}
//         // </div>
//     );
// };

// export default Product;

const Product = ({ product }) => {
    return (
        <div className="card">
            <img src={product.image} alt={product.name} className="image" />
            <div className="content">
                <div className="product-name">{product.name}</div>
                <div className="price">
                    ${product.price} <span className="old-price">${product.oldPrice}</span>
                </div>
                <div className="rating">{'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}</div>
                <button className="buy-button">Buy</button>
            </div>
        </div>
    );
};

export default Product;
