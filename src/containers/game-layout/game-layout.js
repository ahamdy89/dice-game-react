import React, { Component } from 'react';
import {connect} from 'react-redux';
import './game-layout.scss';
import PlayersLayout from '../players-layout/players-layout';
import Header from '../../containers/header/header';
import ButtonComponent from '../../components/button/button';
import {withRouter} from 'react-router-dom';


class GameLayout extends Component {

    redirect = () => {
        this.props.history.push('/game')
    }

    render() {
        const players = this.props.newPlayers;
        return (
                <div className="game-layout-container">
                    <div className="header-container">
                        <Header/>
                    </div>
                    <div className="players-container">
                        <PlayersLayout players={players}/>
                    </div>
                    <div className="footer-container">
                        <p>{players.length < 2 ? 'Minimum two players to start the game' : null}</p>
                        <ButtonComponent 
                        start
                        disable ={players.length < 2 ? true : false}
                        redirect ={this.redirect}
                        />
                    </div>
                </div>
        );
    }
}



const mapStateToProps = state => ({
    newPlayers: state.playersList.players
})
export default withRouter(connect(mapStateToProps)(GameLayout));
