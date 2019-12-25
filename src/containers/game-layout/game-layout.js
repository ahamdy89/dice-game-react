import React, { Component } from 'react';
import {connect} from 'react-redux';
import './game-layout.scss';
import PlayersLayout from '../players-layout/players-layout';



class GameLayout extends Component {


    render() {
        const players = this.props.newPlayers;
        console.log(players)
        return (
                <div className="game-layout-container">
                    <div className="header-container">
                            <div className="add-player-button">

                            </div>
                    </div>
                    <div className="players-container">
                        <PlayersLayout players={players}/>
                    </div>
                </div>
        );
    }
}



const mapStateToProps = state => ({
    newPlayers: state.playersList.players.players
})
export default connect(mapStateToProps)(GameLayout);
