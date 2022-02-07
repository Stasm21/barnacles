import './Cook.css'
import cook from '../img/cook.jpeg'

const Cook = () => {
    return (
        <>
            <div className="cook-container">
                <div>
                    <img
                        className="cook-img"
                        src={cook}
                        alt="plate of gooseneck barnacles"
                    />
                </div>
                <div className="cook-info">
                    <h1 className="cook-heading">
                        Cooking Gooseneck Barnacles
                    </h1>
                    <div>
                        <ul className="cook-ul">
                            <li>
                                Rinse Gooseneck Barnacles off with water
                            </li>
                            <li>
                                Fill pot with ocean water, or salt water
                            </li>
                            <li>Bring water to a boil</li>
                            <li>Throw barnacles in boiling water</li>
                            <li>
                                Cook for 45 seconds to 1 minute
                            </li>
                            <li>
                                Take out and blanch
                            </li>
                            <li>
                               Blanch no more than 5 minutes
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="cook-box">
                <h1 className="cook-heading">Cooking Example Video</h1>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/y2w9OFjoncQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </>
    );
}

export default Cook;
