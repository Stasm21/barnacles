import "./General.css";
import InfoNav from "./InfoNav";
import Test from "./Test";

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
            {list
                .filter((obj) => obj.topic === "question")
                .map((val) => {
                    return (
                        <div>
                            <div>
                                <h1 key={val.id}>{val.topic}</h1>
                            </div>
                            <div>
                                <p key={val.id}>{val.question}</p>
                            </div>
                            <p className="reply">reply</p>
                        </div>
                    );
                })}
            <div></div>
        </div>
    );
};

export default General;
