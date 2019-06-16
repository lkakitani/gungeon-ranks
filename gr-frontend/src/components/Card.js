import React from 'react';

export class Card extends React.Component {
  render() {
    const bgIconName = this.props.item.name
      .replace(/['|(|)|+]/g, '')
      .replace(/[ |-]/g, '_')
      .toLowerCase();
    const quality = this.props.item.quality
      .replace('/', '')
      .split(',')
      .map(q => <div className={`ui image bg-quality_${q}`}></div>);
    const dataHtml = `<div>Use <i class='caret square ${this.props.position} outline icon'></i> on keyboard to vote</div>`;
    return (
      <div className="ui card">
        <div className="content center aligned">
          <div className="header">{this.props.item.name}</div>
          {quality}
          <div className="img-card">
            <div className={`ui image bg-icon bg-${bgIconName}`}></div>
          </div>
          <div className="description">"{this.props.item.quote}"</div>

        </div>
        <div className="ui bottom attached button card-button" onClick={this.props.onClick} data-html={dataHtml} data-position="bottom center" data-variation="inverted">
          Choose
        </div>
      </div >
    );
  };
}

export const RerollCard = (props) => {
  const dataHtml = `<div>Use <i class='caret square down outline icon'></i> on keyboard to reroll</div>`;
  return (
    <div className="ui card">
      <div className="content center aligned">
        <div className="header">?</div>
        <div className="description">
          I don't know / can't decide
        </div>
      </div>
      <div className="ui bottom attached button card-button" onClick={props.onClick} data-html={dataHtml} data-position="bottom center" data-variation="inverted">
        Reroll
      </div>
    </div>
  );
};