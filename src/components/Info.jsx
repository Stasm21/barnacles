import "./Info.css";
import InfoNav from "./InfoNav";

const Info = ({ list }) => {

    console.log(list)

    return (
        <div>
            <div>
                <InfoNav />
                <h1 className="facts-header">Facts</h1>
                <div>
                    <button className="facts-add-button">+ ADD</button>
                </div>
                <div>
                    {list
                        .filter((obj) => obj.topic === "fact")
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
                </div>
            </div>
        </div>
    );
};

export default Info;
