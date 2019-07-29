import React from 'react';
import { Segment } from "../components/Segment";

const Changes = () => {
  return (
    <div>
      <Segment title="Changelog" />

      <div className="ui message">


        <div className="ui grid">
          <div className="row">
            <div className="two wide column">
              <h4>2019-07-28</h4>
            </div>
            <div className="fourteen wide column">
              <ul className="list">
                <li>First version!</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Changes;
