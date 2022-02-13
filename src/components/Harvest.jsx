import "./Harvest.css";
import harvest from "../img/harvest.jpeg";
import hands from "../img/hands.jpeg";
import harvested from "../img/fromrock.jpeg";

const Harvest = () => {
    return (
        <>
            <div className="harvest-container-1">
                <div className="harvest-img">
                    <img
                        src={harvest}
                        alt="Man harvesintg gooseneck barnacles on rocks"
                    />
                </div>
                <div className="harvest-info">
                    <h1 className="harvest-heading">Harvesting</h1>
                    <p>
                        Harvesting gooseneck barnacles can be a very difficult task depending on where
                        you live. In Spain and Portugal, people risk their lives
                        to get their hands on them. Oftentimes, the barnacles can be found in
                        between rocks that are further in the ocean and can result in getting caught in the midst of waves
                        just to get a good bunch. The more dangerous spots yield
                        tastier barnacles, making the gathering process of this
                        ingredient that much harder.
                    </p>
                </div>
            </div>
            <div className="harvest-container-2">
                <div className="harvest-info">
                    <h1 className="harvest-heading">Where?</h1>
                    <p>
                        In Oregon, you can find gooseneck barnacles growing in a variety of
                        different places such as jetties, natural rock formations, large
                        vessels, buoys, pilings or anything that sits in the
                        water near the shore. They will attach
                        themselves to almost anything, including each other.
                    </p>
                </div>
                <div className="harvest-img-2">
                    <img src={hands} alt="handful of gooseneck barnacles" />
                </div>
            </div>
            <div className="harvest-container-3">
                <div>
                    <img
                        className="harvest-img-3"
                        src={harvested}
                        alt="Man harvesting gooseneck barnacles on rocks"
                    />
                </div>
                <div className="harvest-info">
                    <h1 className="harvest-heading">How?</h1>
                    <p>
                        All harvesting is done by hand. You can use a
                        hand tool such as a putty knife or anything that can
                        help you pull the barnacles off of where they are found.
                        You will find that the they are firmly fixed on the surface that they attach themselves
                        to and it can sometimes be difficult to harvest without
                        damage. A good trick is to cut the tool all the way down until you feel the
                        rock and try to scrape off a good sized clump. The bigger and fatter barnacles are considered
                        the ones of higher grade.
                    </p>
                </div>
            </div>
            <div className="video-box">
                <h1 className="video-heading">
                    Watch this video of Gordon Ramsey harvesting barnacles in Portugal to get an idea of how dangerous it can be.
                    <br />
                </h1>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/DNtVU_CpjCw"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </>
    );
};

export default Harvest;
