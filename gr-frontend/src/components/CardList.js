import React from 'react';
import axios from 'axios';
import { Card, RerollCard } from "../components/Card";

export default class CardList extends React.Component {
  state = {
    vote: {
      ballotLeft: '',
      ballotRight: '',
      left: {
        name: 'Casey',
        quote: 'nice'
      },
      right: {
        name: 'rightItem',
        quote: 'this is right'
      }
    }
  }

  async componentWillMount() {
    const res = await axios.get('http://localhost:3030/vote');
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
            <Card item={this.state.vote.right} />
          </div>
        </div>

      </div>
    )
  }
}