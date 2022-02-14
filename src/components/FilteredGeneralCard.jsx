import "./FilteredGeneralCard.css";

const FilteredGeneralCard = ({ list }) => {
    return (
        <div className="general-box">
            {list
                .filter((obj) => obj.topic === "Question")
                .map((val) => {
                    return (
                        <div className="general-card">
                            <h1 className="general-card-header" key={val.id}>
                                {val.topic}
                            </h1>

                            <p className="general-card-text" key={val.id}>
                                {val.question}
                            </p>
                        </div>
                    );
                })}
        </div>
    );
};

export default FilteredGeneralCard;
