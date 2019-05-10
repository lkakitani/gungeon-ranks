import React from 'react';
import {Card, RerollCard} from './components/Card'
import {Segment} from "./components/Segment";

function App() {
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

export default App;
