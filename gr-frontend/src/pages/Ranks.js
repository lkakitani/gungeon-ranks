import React from 'react';
import { Segment } from "../components/Segment";
import RankingsTable from "../components/RankingsTable";

export const Ranks = () => {
  return (
    <div>
      <Segment title="Ranks" />
      <RankingsTable />
    </div>
  );
}

export default Ranks;