import React, { Component } from 'react';
import './player-card.scss';

class PlayerCard extends Component {
    render() {
        const {player, number} = this.props;
        return (
            <div className="player-card-container">
                <div className="player-number">
                    <p>Player 1</p>
                </div>
                <div className="player-name">
                    <p>Ahmed Hamdy</p>
                </div>
            </div>
        );
    }
}

export default PlayerCard;