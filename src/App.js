import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Harvest from "./components/Harvest";
import Cook from "./components/Cook"
import Regulations from "./components/Regulations"
import FAQS from "./components/FAQS"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            {/* <Navbar /> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route index element={<Home />} />
                        <Route path="harvest" element={<Harvest />} />
                        <Route path="cook" element={<Cook />} />
                        <Route path="regulations" element={<Regulations />} />
                        <Route path="faqs" element={<FAQS />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
