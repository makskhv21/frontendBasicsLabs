import React from 'react';
import GoodsGallery from './GoodsGallery';
import './GoodsCard.css';
import goods from "./goodsData"

function GoodsCard() {
    return (
        <div className="goods-card">
            {goods.map((item) => (
                <GoodsGallery 
                    key={item.id} 
                    image={item.image} 
                    name={item.name} 
                    price={item.price} 
                />
            ))}
        </div>
    );
}

export default GoodsCard;