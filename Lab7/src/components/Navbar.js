import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div style={{ textAlign: 'center' }}>
            <a href="https://makskhv21.github.io/frontendBasicsLabs/">Головна</a>
            <div style={{marginTop: '20px'}}>
                <button style={buttonStyle}>
                    <Link to="/" style={linkStyle}>Home Page</Link>
                </button>
                <button style={buttonStyle}>
                    <Link to="/goods" style={linkStyle}>Goods Page</Link>
                </button>
            </div>
        </div>
    )
}

const buttonStyle = {
    margin: '0 10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
};

const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
};

export default Navbar;