import React from 'react';
import { Segment } from "../components/Segment";
import { Card, RerollCard } from "../components/Card";

const Home = () => {
  return (
    <div>
      <Segment title="Rank Items" />
      <div className="ui three column grid">
        <div className="column">
          <Card itemName="Casey" itemQuote="Batting .50" />
        </div>
        <div className="column">
          <div className="content">
            <RerollCard />
          </div>
        </div>

        <div className="column">
          <div className="content">
            <Card itemName="Pea Shooter" itemQuote="Baby's First Gun" />
          </div>
        </div>
      </div>
    </div>
  );

}

export default Home;