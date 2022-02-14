import "./General.css";
import InfoNav from "./InfoNav";
import FilteredGeneralCard from "./FilteredGeneralCard";
import { useState } from "react";

const General = ({ list, setTopic, setText, submitInfo }) => {
    const [showGeneralInput, setShowGeneralInput] = useState(false);

    const inputTextHandler = (e) => {
        setText(e.target.value);
        setTopic("info");
    };

    const submitPostHandler = (e) => {
        e.preventDefault();
        submitInfo();
        setShowGeneralInput(false);
    };

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
                    <textarea
                        onChange={inputTextHandler}
                        className="facts-text"
                    ></textarea>
                    <div className="facts-button-box">
                        <button
                            onClick={submitPostHandler}
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
