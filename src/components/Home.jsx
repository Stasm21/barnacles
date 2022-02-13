import React from "react";
import "./Home.css";
import barnacles from "../img/onRock.jpeg";

const Home = () => {
    return (
        <div className="home-container">
            <div>
                <img className="home-img" src={barnacles} alt="" />
            </div>
            <div className="home-info">
                <h1 className="home-heading">Gooseneck Barnacles</h1>
                <p className="home-details">
                    Gooseneck barnacles, otherwise known as percebes, are the claw-footed, lobstery
                    little crustaceans you may quickly find to be quite delicious once you
                    give them a try. This seafood is among the most
                    expensive in the world and can sell for as much as $125 a
                    pound. They are filter feeders that are dependent on water
                    movement for feeding. These oddly shaped barnacles are regarded as a delicacy
                    in many places in the world and have had a long-standing reputation
                    as the source of steady profit. In the past, many small fishing villages in
                    Cornwall, England benefited from the gooseneck barnacles attached on the hull
                    of ships arriving at the ports. Today, these small crustaceans may seem
                    insignificant to many people at first glance, but a closer look will reveal that
                    they are truly one of the most overlooked seafoods on the market.
                    


                </p>
            </div>
        </div>
    );
};

export default Home;
