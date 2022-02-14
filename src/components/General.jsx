import "./General.css";
import InfoNav from "./InfoNav";
import FilteredGeneralCard from "./FilteredGeneralCard";
import { useState } from "react";

const General = ({ list, submitTopic }) => {

    const [showGeneralInput, setShowGeneralInput] = useState(false);

    return (
        <div>
            <div>
                <InfoNav />
                <h1 className="general-heading">General Info</h1>
                <div>
                    <button
                        onClick={() => setShowGeneralInput(true)}
                        className="general-add-button"
                    >
                        + ADD
                    </button>
                </div>
            </div>

            {showGeneralInput && (
                <div>
                    <textarea className="facts-text"></textarea>
                    <div className="facts-button-box">
                        <button
                            onClick={() => setShowGeneralInput(false)}
                            className="facts-post-button"
                        >
                            POST
                        </button>
                    </div>
                </div>
            )}

            <FilteredGeneralCard list={list} />

        </div>
    );
};

export default General;
