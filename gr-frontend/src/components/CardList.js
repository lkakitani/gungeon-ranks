import React from 'react';
import { Axios } from '../services/axios';
import { Card, RerollCard } from "../components/Card";

export default class CardList extends React.Component {
  state = {
    vote: this.cleanVote()
  }

  async componentDidMount() {
    this.reroll();
    document.addEventListener("keydown", this.handleKeyBindingVote.bind(this));
  }

  async vote(ballot) {
    // compute vote
    await Axios.postBallot(ballot);
    // get new candidates
    this.reroll();
  }

  async reroll() {
    this.setState({ vote: this.cleanVote() });
    const res = await Axios.getCandidates();
    this.setState({ vote: res.data });
  }

  handleKeyBindingVote(e) {
    if (e.which === 37) { // left
      this.vote(this.state.vote.ballotLeft);
    } else if (e.which === 39) { // right
      this.vote(this.state.vote.ballotRight);
    } else if (e.which === 40) { // down
      this.reroll();
    }
  }

  cleanVote() {
    return {
      ballotLeft: '',
      ballotRight: '',
      left: {
        name: '',
        quote: '',
        quality: ''
      },
      right: {
        name: '',
        quote: '',
        quality: ''
      }
    }
  }

  render() {
    return (
      <div className="ui three column grid">

        <div className="column">
          <Card item={this.state.vote.left} onClick={() => this.vote(this.state.vote.ballotLeft)} position="left" />
        </div>

        <div className="column">
          <div className="content">
            <RerollCard onClick={() => this.reroll()} />
          </div>
        </div>

        <div className="column">
          <div className="content">
            <Card item={this.state.vote.right} onClick={() => this.vote(this.state.vote.ballotRight)} position="right" />
          </div>
        </div>

      </div>
    )
  }
}