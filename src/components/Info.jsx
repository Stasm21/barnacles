import FilteredCard from "./FilteredFactCard";
import "./Info.css";
import InfoNav from "./InfoNav";

const Info = ({ list }) => {

    const thing = 'fact'
    // console.log(list)

    return (
        <div className="info-main">
            <div>
                <InfoNav />
                <h1 className="facts-header">Facts</h1>
                <div>
                    <button className="facts-add-button">+ ADD</button>
                </div>
                <FilteredCard list={list} thing={thing} />
                {/* <div>
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
                                </div>
                            );
                        })}
                </div> */}
            </div>
        </div>
    );
};

export default Info;
