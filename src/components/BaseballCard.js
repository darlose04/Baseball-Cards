import React, { Component } from 'react';

class BaseballCard extends Component {

  render() {
    return (
      <div className="Baseball-card">
        <h2 className="Baseball-card-title">{this.props.name}</h2>
        <img src={this.props.img} alt=""/>
        <div className="Baseball-card-stats">
          <p>Games: {this.props.games}</p>
          <p>Plate Appearances: {this.props.pa}</p>
          <p>Homeruns: {this.props.hr}</p>
          <p>Runs: {this.props.runs}</p>
          <p>RBI: {this.props.rbi}</p>
          <p>SB: {this.props.sb}</p>
          <p>Slashline: {this.props.avg}/{this.props.obp}/{this.props.slg}</p>
        </div>
      </div>
    )
  }
}

export default BaseballCard;

// https://securea.mlb.com/mlb/images/players/head_shot/595879.jpg