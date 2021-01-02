import React from 'react';
import './Home.css';
import Banner from './Banner.js';
import Card from './Card';
import Cards from './Cardcontents';
import {Houses} from './Cardcontents';


function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
            {
                Cards.map((card) =>
                    (
                        <Card 
                        src ={card.src}
                        title={card.title}
                        description={card.description} />
                    )
                )
            }
            </div>
            
            <div className="home__section">
            {Houses.map((house) =>
            (
                <Card 
                src={house.src}
                title={house.title}
                description={house.description}
                price={house.price} />
            )
            
            )
        }
            </div>
        </div>
    )
}

export default Home;
