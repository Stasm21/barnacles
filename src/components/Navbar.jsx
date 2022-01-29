import React from "react";
import "./Navbar.css";
import black_white_barnacles from '../img/black_white_barnacles.png';
// import Cook from "./Cook";
// import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flexbox-container">
            <div className="title">
                <h1 className="header">
                    OREGON GOOSENECK BARNACLES{" "}
                    <span>
                        <img
                            className="img"
                            src={black_white_barnacles}
                            alt="barnacles"
                        />
                    </span>
                </h1>
            </div>
            <div className="img">
                {/* <img className="img" src={black_white_barnacles} alt="barnacles" /> */}
            </div>
            <div className="items">
                <ul>
                    <li>
                        <a href="#">HOME</a>
                    </li>
                    <li>
                        <a href="#">HARVEST</a>
                    </li>
                    <li>
                        <a href="#">COOK</a>
                    </li>
                    <li>
                        <a href="#">REGULATIONS</a>
                    </li>
                    <li>
                        <a href="#">FAQS</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
