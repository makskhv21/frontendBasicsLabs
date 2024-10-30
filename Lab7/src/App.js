import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Navbar from './components/Navbar';
import GoodsCard from './components/GoodsCard';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Header />
                        <Content />
                    </>
                } />
                <Route path="/goods" element={<GoodsCard />} />
            </Routes>
        </Router>
    );
}

export default App;
