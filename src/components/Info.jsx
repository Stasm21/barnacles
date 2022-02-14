import FilteredFactCard from "./FilteredFactCard";
import "./Info.css";
import InfoNav from "./InfoNav";
import { useState } from "react";

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
=======
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
>>>>