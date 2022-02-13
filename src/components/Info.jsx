import "./Info.css";
import InfoNav from "./InfoNav";

const Info = () => {
    return (
        <div>
            <div>
                <InfoNav />
                <h1 className="facts-header">Facts</h1>
                <div className="facts-add-button">+ ADD</div>
            </div>
        </div>
    );
};

export default Info;
