import FilteredCard from "./FilteredFactCard";
import "./Info.css";
import InfoNav from "./InfoNav";
import { useState } from "react";

const Info = ({ list }) => {
    const [showFactInput, setShowFactInput] = useState(false);



    return (
        <div className="info-main">
            <div>
                <InfoNav />
                <h1 className="facts-header">Facts</h1>
                <div>
                    <button onClick={() => setShowFactInput(true)} className="facts-add-button">+ ADD</button>
                </div>
                {showFactInput && (
                    <div>
                        <textarea className="facts-text"></textarea>
                        <div>
                            <button onClick={() => setShowFactInput(false)} className="facts-post-button">POST</button>
                        </div>
                    </div>
                )}
                <FilteredCard list={list} />
            </div>
        </div>
    );
};

export default Info;
