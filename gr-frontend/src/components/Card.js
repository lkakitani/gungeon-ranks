import React from 'react';

export class Card extends React.Component {

  render() {
    return (
      <div className="ui card">
        <div className="content center aligned">
          <div className="header">{this.props.item.name}</div>
          <div className="img-card">
            <img className="ui mini image" src={this.props.item.icon_path} alt={this.props.item.name}></img>
          </div>
          <div className="description">"{this.props.item.quote}"</div>

        </div>
        <div className="ui bottom attached button" onClick={this.props.onClick}>
          Choose
        </div>
      </div>
    );
  };
}

export const RerollCard = (props) => {
  return (
    <div className="ui card">
      <div className="content center aligned">
        <div className="header">?</div>
        <div className="description">
          I don't know / can't decide
        </div>
      </div>
      <div className="ui bottom attached button" onClick={props.onClick}>
        Reroll
      </div>
    </div>
  );
};