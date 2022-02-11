import './FAQS.css'

const FAQS = ({ setTopic, setText, submitTopic }) => {
    return (
        <div>
            <h1>Facts, Questions, Tips</h1>

            <div className="form">
                <label>Topic:</label>
                <input
                    type="text"
                    name="topic"
                    onChange={(e) => {
                        setTopic(e.target.value);
                    }}
                />
                <label>Text:</label>
                <input
                    type="text"
                    name="text"
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />

                <button onClick={submitTopic}>Submit</button>
            </div>
        </div>
    );
};

export default FAQS;
