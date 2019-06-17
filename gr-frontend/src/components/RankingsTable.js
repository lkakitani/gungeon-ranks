import React from 'react';
import { Axios } from '../services/Axios';

export default class RankingsTable extends React.Component {

  state = {
    ranks: []
  };

  async componentDidMount() {
    const res = await Axios.getItemRanks();
    this.setState({ ranks: res.data });
  }

  render() {
    const ranks = this.state.ranks.map((item, index) => {
      const bgIconName = item.name
        .replace(/['|(|)|+]/g, '')
        .replace(/[ |-]/g, '_')
        .toLowerCase();
      const quality = item.quality
        .replace('/', '')
        .split(',')
        .map(q => <div key={q} className={`ui image bg-quality_${q}`}></div>);
      return <tr key={item.id}>
        <td className="center aligned">{index + 1}</td>
        <td className="center aligned" data-label="icon">
          <a href={`https://enterthegungeon.gamepedia.com/${item.wiki_page}`} target="_blank" rel="noopener noreferrer">
            <div className={`ui image bg-icon bg-${bgIconName}`}></div>
          </a>
        </td>
        <td data-label="Name">{item.name}</td>
        <td data-label="Quote">{item.quote}</td>
        <td data-label="Type">{item.type === 'A' ? 'Active' : 'Passive'}</td>
        <td className="center aligned" data-label="Quality">{quality}</td>
        <td className="center aligned" data-label="EloRating">{item.elo_rating}</td>
      </tr>
    });

    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th className="center aligned">#</th>
            <th>Icon</th>
            <th>Name</th>
            <th>Quote</th>
            <th>Type</th>
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