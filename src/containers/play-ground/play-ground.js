import React, { Component } from 'react';
import {connect} from 'react-redux';
import './play-ground.scss';
import PlayersLayout from '../players-layout/players-layout';
import Header from '../../containers/header/header';
import ButtonComponent from '../../components/button/button';
import {withRouter} from 'react-router-dom';


class PlayGround extends Component {


    render() {
        const players = this.props.newPlayers;
        return (
                <div className="game-layout-container">
                    <div className="header-container">
                        <Header/>
                    </div>
                    <div className="players-container">
                        <PlayersLayout players={players} game/>
                    </div>
                </div>
        );
    }
}



const mapStateToProps = state => ({
    newPlayers: state.playersList.players.players
})
export default withRouter(connect(mapStateToProps)(PlayGround));
