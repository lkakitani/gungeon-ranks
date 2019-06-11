import React from 'react';
import axios from 'axios';

export default class RankingsTable extends React.Component {

  state = {
    ranks: []
  };

  async componentDidMount() {
    const res = await axios.get('http://localhost:3030/ranks');
    this.setState({ ranks: res.data });
  }

  render() {
    const ranks = this.state.ranks.map((item, index) =>
      <tr key={item.id}>
        <td className="center aligned">{index + 1}</td>
        <td className="center aligned" data-label="icon"><img className="img-rank" src={item.icon_path} alt={item.name}></img></td>
        <td data-label="Name">{item.name}</td>
        <td data-label="Quote">{item.quote}</td>
        <td className="center aligned" data-label="Quality">{item.quality}</td>
        <td className="center aligned" data-label="EloRating">{item.elo_rating}</td>
      </tr>);

    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th className="center aligned">#</th>
            <th>Icon</th>
            <th>Name</th>
            <th>Quote</th>
            <th className="center aligned">Quality</th>
            <th className="center aligned">Rating</th>
          </tr>
        </thead>
        <tbody>
          {ranks}
        </tbody>
      </table>
    );
  }
}