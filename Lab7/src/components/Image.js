import React from 'react';

const Image = ({ src, alt, width }) => {
    return (
        <div id="photo-container">
            <a href="https://visitlviv.net/" target="_blank" rel="noopener noreferrer">
                <img 
                    src={src} 
                    alt={alt} 
                    style={{ width: width }} 
                />
            </a>
        </div>
    );
};

export default Image;
