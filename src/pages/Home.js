import React from 'react';
import {Segment} from "../components/Segment";
import {Card, RerollCard} from "../components/Card";

const Home = () => {
    return (

        <div>
            <Segment title="Rank Items" />
            <div className="ui cards">
                <Card itemName="Casey" itemQuote="Batting .50" />
                <RerollCard />
                <Card itemName="Pea Shooter" itemQuote="Baby's First Gun" />
            </div>
        </div>
    );

}

export default Home;