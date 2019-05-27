import React, { Component } from 'react';
import './BaseballCard.css';

class BaseballCard extends Component {

  render() {
    return (
      <div className="Baseball-card">
        <div className="Baseball-card-inner">
          <div className="Baseball-card-front">
            <img className="Baseball-card-image" src={this.props.img} alt=""/>
          </div>
          <div className="Baseball-card-back">
            <h1 className="Baseball-card-title">{this.props.name}</h1>
            <p>Games: {this.props.games}</p>
            <p>Plate Appearances: {this.props.pa}</p>
            <p>Homeruns: {this.props.hr}</p>
            <p>Runs: {this.props.runs}</p>
            <p>RBI: {this.props.rbi}</p>
            <p>SB: {this.props.sb}</p>
            <p>Slashline: {this.props.avg}/{this.props.obp}/{this.props.slg}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default BaseballCard;