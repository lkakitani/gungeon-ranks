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
    const ranks = this.state.ranks.map((item) =>
      <tr>
        <td data-label="Name"><img src={item.icon_path} alt={item.name}></img></td>
        <td data-label="Age">{item.name}</td>
        <td data-label="Job">{item.quote}</td>
        <td data-label="Job">{item.quality}</td>
        <td data-label="Job">{item.elo_rating}</td>
      </tr>);

    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Icon</th>
            <th>Name</th>
            <th>Quote</th>
            <th>Quality</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {ranks}
        </tbody>
      </table>
    );
  }
}