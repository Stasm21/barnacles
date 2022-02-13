import "./General.css";
import InfoNav from "./InfoNav";

const General = () => {
    return (
        <div>
            <div>
                <InfoNav />
                <h1 className="general-heading">General Info</h1>
                <div className="general-add-button">+ ADD</div>
            </div>
        </div>
    );
};

export default General;
