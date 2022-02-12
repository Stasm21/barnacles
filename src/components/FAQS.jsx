import "./FAQS.css";

const FAQS = ({ setTopic, setText, submitTopic, topic, text, list }) => {
    // console.log(setList)

    const submitHandler = (e) => {
        e.preventDefault();
        submitTopic(setTopic);
    };

    return (
        <div>
            <h1>FAQs</h1>

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
                    <option value="fact">Fact</option>
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

                <button className="post-button" onClick={submitHandler}>POST</button>
                {list.map((val) => {
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
            </div>
        </div>
    );
};

export default FAQS;
