import React from 'react';
import axios from 'axios';
import { Card, RerollCard } from "../components/Card";

export default class CardList extends React.Component {
  state = {
    vote: {
      ballotLeft: '',
      ballotRight: '',
      left: {
        name: '',
        quote: ''
      },
      right: {
        name: '',
        quote: ''
      }
    }
  }

  async componentWillMount() {
    this.reroll();
  }

  async vote(ballot) {
    // compute vote
    await axios.post('http://localhost:3030/vote', { ballot });
    // get new candidates
    this.reroll();
  }

  async reroll() {
    const res = await axios.get('http://localhost:3030/vote');
    this.setState({ vote: res.data });
  }

  render() {
    return (
      <div className="ui three column grid">

        <div className="column">
          <Card item={this.state.vote.left} onClick={() => this.vote(this.state.vote.ballotLeft)} />
        </div>

        <div className="column">
          <div className="content">
            <RerollCard onClick={() => this.reroll()} />
          </div>
        </div>

        <div className="column">
          <div className="content">
            <Card item={this.state.vote.right} onClick={() => this.vote(this.state.vote.ballotRight)} />
          </div>
        </div>

      </div>
    )
  }
}