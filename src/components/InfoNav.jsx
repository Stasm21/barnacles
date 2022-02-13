import { Outlet, Link } from "react-router-dom";
import "./InfoNav.css";

const InfoNav = () => {
    return (
        <div>
            <div>
                <h1 className="info-header">INFO</h1>
            </div>
            <div className="topic-heading">
                <ul className="info-ul">
                    <Link to="/info">
                        <li>FACTS</li>
                    </Link>
                    <Link to="/general">
                        <li>GENERAL INFO</li>
                    </Link>
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default InfoNav;
