import React from 'react';
import { Segment } from "../components/Segment";
import RankingsTable from "../components/RankingsTable";

export const GunRanks = () => {
  return (
    <div>
      <Segment title="Ranks" />
      <RankingsTable type="guns" />
    </div>
  );
}

export default GunRanks;