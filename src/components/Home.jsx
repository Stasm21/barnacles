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
                    Otherwise know as "percebes" are the claw-footed, lobstery
                    little crustaceans you’ll fall madly in love with, if you
                    just give them a chance. This seafood is among the most
                    expensive in the world and can go for as much as $125 a
                    pound. They are filter feeders that are dependent on water
                    movement for feeding. In many places in the world they are a
                    delicacy, in fact, back in the day, any ships arriving in
                    Cornwall, England with gooseneck barnacles on the hull were
                    a real moneyspinner. The gooseneck barnacles would be
                    scraped from the hull and sold for food. They live attached
                    to the hard surfaces of rocks and flotsam in the ocean.
                    
                </p>
            </div>
        </div>
    );
};

export default Home;
