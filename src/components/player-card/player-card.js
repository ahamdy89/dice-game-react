import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './player-card.scss';

class PlayerCard extends Component {
    render() {
        const {name, score, winner, active, number, add, click} = this.props;
        return (
            <div className="player-card-container" onClick={click}>
                {add ?
                <p>Add Player <FontAwesomeIcon icon={faUserPlus}/></p>
                :
                <div>
                    
                    <div>
                        <p>{active ? 'Active' : null}</p>
                    </div>
                    <div className="player-number">
                        <p>{`Player ${number}`}</p>
                    </div>
                    <div className="player-name">
                        <p>{winner ? 'Winner' : name}</p>
                    </div>
                    <div>
                        <p>{score}</p>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default PlayerCard;