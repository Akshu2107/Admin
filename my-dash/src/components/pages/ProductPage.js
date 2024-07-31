import React from 'react';
import Product from './subpages/Product'; // Assuming Product component is in Product.js

const ProductPage = () => {
    // Simulated product data
    const products = [
        {
            id: 1,
            image: "https://modernize-react.adminmart.com/assets/s11-4e7c7a58.jpg",
            name: "Cute Soft Teddybear",
            price: "285",
            oldPrice: "345",
            rating: 3
        },
        {
            id: 2,
            image: "https://modernize-react.adminmart.com/assets/s5-cece6039.jpg",
            name: "MacBook Air Pro",
            price: "900 ",
            oldPrice: "650",
            rating: 3
        },
        {
            id: 3,
            image: "https://modernize-react.adminmart.com/assets/s4-414994fc.jpg",
            name: "Boat Headphone",
            price: "50",
            oldPrice: "65",
            rating: 3
        },
        {
            id: 4,
            image: "https://modernize-react.adminmart.com/assets/s4-414994fc.jpg",
            name: "Boat Headphone",
            price: "50",
            oldPrice: "65",
            rating: 3
        },
        {
            id: 5,
            image: "https://modernize-react.adminmart.com/assets/s4-414994fc.jpg",
            name: "Boat Headphone",
            price: "50",
            oldPrice: "65",
            rating: 3
        },

    ];

    return (
        <div className="product-page">
            <h2>Our Products</h2>
            <div className="products-list">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
