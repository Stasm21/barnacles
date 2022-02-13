import "./Info.css";
import { Outlet, Link } from "react-router-dom";

const Info = () => {
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
        </div>
    );
};

export default Info;
