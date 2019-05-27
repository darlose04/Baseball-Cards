import React, { Component } from 'react';
import BaseballCard from './BaseballCard';
import uuid from 'uuid';

class CardCollection extends Component {
  static defaultProps = {
    players: [
      {id: uuid.v4(), img: 'https://securea.mlb.com/mlb/images/players/head_shot/595879.jpg', name: 'Javier Baez', games: 160, plate_appearances: 645, hr: 34, runs: 101, rbi: 111, sb: 21, avg: '.290', obp: '.326', slg: '.554'},
      {id: uuid.v4(), img: 'https://securea.mlb.com/mlb/images/players/head_shot/519203.jpg', name: 'Anthony Rizzo', games: 153, plate_appearances: 665, hr: 25, runs: 74, rbi: 101, sb: 6, avg: '.283', obp: '.376', slg: '.470'}
    ]
  }

  

  render() {
    return (
      <div className="CardCollection">
        <h1>Major League Baseball Cards (2018 Stats)</h1>
        {this.props.players.map((player) => (
          <BaseballCard
            key={player.id}
            img={player.img}
            name={player.name}
            games={player.games}
            pa={player.plate_appearances}
            hr={player.hr}
            runs={player.runs}
            rbi={player.rbi}
            sb={player.sb}
            avg={player.avg}
            obp={player.obp}
            slg={player.slg}
          />
        ))}
      </div>
    )
  }
}

export default CardCollection;