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
                        Harvesting them can be very difficult depending on where
                        you are. In Spain and Portugal, people risk their lives
                        to get their hands on these, they can be found in
                        between rocks and you might have to get in between waves
                        to get a good clump. The more dangerous spots yield
                        tastier barnacles, making the gathering process of this
                        ingredient that much harder.
                    </p>
                </div>
            </div>
            <div className="harvest-container-2">
                <div className="harvest-info">
                    <h1 className="harvest-heading">Where?</h1>
                    <p>
                        In Oregon, you can find them growing in many different
                        places, such as Jetties, natural rock formations, large
                        vessels, buoys, pilings or anything that sits in the
                        water near the shore. Gooseneck barnacles will stick
                        themselves to almost anything including each other.
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
                        All harvesting is done by hand. You can you use a
                        handtool such as a putty knife, or anything that can
                        help you pull the barnacles from the rock. They are on
                        very strong and can be difficult to harvest without
                        damaging. Cut the tool all the way until you feel the
                        rock and try to scrape off a good sized clump to take
                        with you. The bigger and fatter barnacles are considered
                        the higher grade ones.
                    </p>
                </div>
            </div>
            <div className="video-box">
                <h1 className="video-heading">
                    Here's example of how dangerous this can get,
                    <br /> Gordon Ramsey harvesting in Portugal.
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
