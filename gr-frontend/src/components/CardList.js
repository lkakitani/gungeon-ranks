import React from 'react';
import axios from 'axios';
import { Card, RerollCard } from "../components/Card";

export default class CardList extends React.Component {
  state = {
    cards: []
  }

  async componentWillMount() {
    const res = await axios.get('http://localhost:3030/vote');
    console.log(res);
    this.setState({ vote: res.data });
  }

  render() {
    return (
      <div className="ui three column grid">

        <div className="column">
          <Card item={this.state.vote.left} />
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
    )
  }
}