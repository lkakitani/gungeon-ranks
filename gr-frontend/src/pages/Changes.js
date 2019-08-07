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
              <h4>2019-08-06</h4>
            </div>
            <div className="fourteen wide column">
              <ul className="list">
                <li>Site is now live</li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="two wide column">
              <h4>2019-07-28</h4>
            </div>
            <div className="fourteen wide column">
              <ul className="list">
                <li>First version!</li>
                <li>If you find any bugs or want to contact me, send an email to <a href="mailto:gungeonranks@gmail.com">gungeonranks@gmail.com</a></li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Changes;
