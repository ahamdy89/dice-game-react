import React, { Component } from 'react';
import {connect} from 'react-redux';
import './play-ground.scss';
import PlayersLayout from '../players-layout/players-layout';
import Header from '../../containers/header/header';
import {withRouter} from 'react-router-dom';
import RollingSide from '../../components/rolling-side/rolling-side';


class PlayGround extends Component {


    render() {
        const players = this.props.newPlayers;
        return (
                <div className="play-ground-container">
                    <div className="header-container">
                        <Header/>
                    </div>
                    <div className="game-playing">
                        <div className="players-container">
                            <PlayersLayout players={players} game/>
                        </div>
                        <div className="rolling-side">
                            <RollingSide/>
                        </div>
                    </div>
                </div>
        );
    }
}



const mapStateToProps = state => ({
    newPlayers: state.playersList.players
})
export default withRouter(connect(mapStateToProps)(PlayGround));
