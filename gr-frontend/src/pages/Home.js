import React from 'react';
import { Segment } from "../components/Segment";
import CardList from "../components/CardList";

const Home = () => {
  return (
    <div>
      <Segment title="Rank Items" />
      <CardList />
    </div>
  );

}

export default Home;