import React from 'react';
import './Home.css';
import barnacles from '../img/barnacles.jpeg';


const Home = () => {
    return (
        <div className="home-container">
            <div>
                <img className="home-img" src={barnacles} alt="" />
            </div>
            <div className="home-info">
                <h1 className="home-heading">Gooseneck Barnacles</h1>
                <p>
                    Gentrify vexillologist next level ethical. Photo booth blog
                    jianbing man bun you probably haven't heard of them
                    snackwave four loko keytar mumblecore ethical vape viral.
                    Helvetica blog microdosing, meggings wolf narwhal four loko
                    blue bottle kickstarter man braid humblebrag. Occupy yr la
                    croix craft beer wayfarers. Tousled gentrify ramps pug VHS.
                    Jean shorts man bun VHS put a bird on it street art vape
                    semiotics, tofu 8-bit. Kickstarter pok pok woke gastropub.
                </p>
            </div>
        </div>
    );
}

export default Home;
