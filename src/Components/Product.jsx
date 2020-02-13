import React from 'react';
import './product.css';

export const Product = props=>(
    <div>
    <img className="product-image" src="ghee.jpeg"></img>
        <h1>{props.name}</h1>
        <h2>{props.price}</h2>
    </div>
)