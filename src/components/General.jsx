import "./General.css";
import InfoNav from "./InfoNav";
import Test from "./Test";
import FilteredGeneralCard from "./FilteredGeneralCard";

const General = ({ list, submitTopic }) => {
    const addFact = () => {
        console.log("hello");
        return (
            <div>
                <h1>Hello</h1>
            </div>
        );
    };

    return (
        <div>
            <div>
                <InfoNav />
                <h1 className="general-heading">General Info</h1>
                <div>
                    <button onClick={addFact} className="general-add-button">
                        + ADD
                    </button>
                    {addFact}
                </div>
            </div>
            <div>
                <FilteredGeneralCard list={list} />
            </div>
        </div>
    );
};

export default General;
