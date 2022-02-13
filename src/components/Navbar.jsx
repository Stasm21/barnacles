import React from "react";
import "./Navbar.css";
import black_white_barnacles from '../img/black_white_barnacles.png';
import { Outlet, Link } from "react-router-dom";
// import Cook from "./Cook";

const Navbar = () => {
    return (
        <div className="navbar-box">
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
                <div className="items">
                    <ul className="navbar-ul">
                        <Link to="/">
                            <li>
                                <a href="#">HOME</a>
                            </li>
                        </Link>

                        <Link to="/harvest">
                            <li>
                                <a href="#">HARVEST</a>
                            </li>
                        </Link>
                        <Link to="/cook">
                            <li>
                                <a href="#">COOK</a>
                            </li>
                        </Link>
                        <Link to="/regulations">
                            <li>
                                <a href="#">REGULATIONS</a>
                            </li>
                        </Link>
                        <Link to="/info">
                            <li>
                                <a href="#">INFO</a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Navbar;
