import FilteredFactCard from "./FilteredFactCard";
import "./Info.css";
import InfoNav from "./InfoNav";
import { useState } from "react";

const Info = ({ list, setTopic, setText, submitInfo }) => {
    const [showFactInput, setShowFactInput] = useState(false);

    const inputTextHandler = (e) => {
        setText(e.target.value);
        setTopic("fact");
    };
    console.log(list);

    // const dfhgh

    const submitPostHandler = (e) => {
        e.preventDefault();
        submitInfo();
        setShowFactInput(false);
    };

    return (
        <div className="info-main">
            <div>
                <InfoNav />
                <h1 className="facts-header-main">Facts</h1>
                <div>
                    <button
                        onClick={() => setShowFactInput(true)}
                        className="facts-add-button"
                    >
                        + ADD
                    </button>
                </div>
                {showFactInput && (
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
                <FilteredFactCard list={list} />
            </div>
        </div>
    );
};

export default Info;
