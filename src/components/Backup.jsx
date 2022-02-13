import "./Info.css";
import InfoNav from "./InfoNav";

const Info = ({ setTopic, setText, submitTopic, topic, text, list }) => {
    const submitHandler = (e) => {
        e.preventDefault();
        submitTopic(setTopic);
    };

    return (
        <div>
            <div>
                <InfoNav />
                <h1 className="facts-header">Facts</h1>
                <div className="facts-add-button">+ ADD</div>
            </div>
            <div className="form">
                {/* <h1>Topic:</h1> */}
                <select
                    className="topic-box"
                    value={topic}
                    type="text"
                    name="topic"
                    onChange={(e) => {
                        setTopic(e.target.value);
                    }}
                >
                    <option value="question">Question</option>
                    <option value="Fact">Fact</option>
                    <option value="info">Info</option>
                </select>

                {/* <input
                    // value={topic}
                    type="text"
                    name="topic"
                    onChange={(e) => {
                        setTopic(e.target.value);
                    }}
                /> */}

                <div>
                    <textarea
                        className="text-box"
                        value={text}
                        type="text"
                        name="text"
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    />
                </div>

                <button className="post-button" onClick={submitHandler}>
                    POST
                </button>
                {list.map((val) => {
                    if (val.topic === "Fact") {
                        return (
                            <div>
                                <div>
                                    <h1 key={val.id}>{val.topic}</h1>
                                </div>
                                <div>
                                    <p key={val.id}>{val.question}</p>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default Info;


// .general-heading {
//     font-family: 'Times New Roman', Times, serif;
//     text-transform: uppercase;
//     font-size: 25px;
//     margin-top: 40px;
// }

// .general-add-button {
//     width: 584px;
//     height: 102px;
//     background-color: #142541;
//     margin: auto;
//     color: #ffffff;
//     font-size: 37px;
//     margin-top: 30px;
//     font-family: "Times New Roman", Times, serif;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// }

// .general-add-button:hover {
//     cursor: pointer;
// }
