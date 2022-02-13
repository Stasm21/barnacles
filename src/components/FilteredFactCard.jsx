import "./FilteredFactCard.css";

const FilteredFactCard = ({ list }) => {
    return (
        <div>
            <div>
                {list
                    .filter((obj) => obj.topic === "fact")
                    .map((val) => {
                        return (
                            <div className="fact-card">
                                <h1 className="fact-card-header" key={val.id}>{val.topic}</h1>

                                <p className="fact-card-text" key={val.id}>{val.question}</p>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default FilteredFactCard;