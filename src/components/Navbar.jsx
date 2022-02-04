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
                                <a>HOME</a>
                            </li>
                        </Link>

                        <Link to="/harvest">
                            <li>
                                <a>HARVEST</a>
                            </li>
                        </Link>
                        <Link to="/cook">
                            <li>
                                <a>COOK</a>
                            </li>
                        </Link>
                        <Link to="/regulations">
                            <li>
                                <a>REGULATIONS</a>
                            </li>
                        </Link>
                        <Link to="/faqs">
                            <li>
                                <a>FAQS</a>
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
