import React from 'react';

function GoodsGallery({ image, name, price }) {
    return (
        <div className="goods-gallery">
            <img src={image} alt={name} className="goods-image" />
            <h2 className="goods-name">{name}</h2>
            <p className="goods-price">Price: ${price}</p>
        </div>
    );
}

export default GoodsGallery;
