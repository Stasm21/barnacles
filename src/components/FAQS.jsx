import './FAQS.css'

const FAQS = ({ setTopic, setText, submitTopic, topic, text }) => {

    // console.log('hello')

    const submitHandler = (e) => {
        e.preventDefault();
        submitTopic(setTopic);
    }

    console.log(topic)

    return (
        <div>
            <h1>FAQs</h1>

            <div className="form">
                <h1>Topic:</h1>
                <select
                    // onChange={statusHandler}
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
                    <input
                        // value={text}
                        type="text"
                        name="text"
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    />
                </div>

                <button onClick={submitHandler}>Submit</button>
            </div>
        </div>
    );
};

export default FAQS;
