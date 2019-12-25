import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './player-card.scss';

class PlayerCard extends Component {
    render() {
        const {name, number, add, click} = this.props;
        return (
            <div className="player-card-container" onClick={click}>
                {add ?
                <p>Add Player <FontAwesomeIcon icon={faUserPlus}/></p>
                :
                <div>
                    <div className="player-number">
                        <p>{`Player ${number + 1}`}</p>
                    </div>
                    <div className="player-name">
                        <p>{name}</p>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default PlayerCard;