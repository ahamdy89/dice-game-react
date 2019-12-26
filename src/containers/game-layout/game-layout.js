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
        console.log(players)
        return (
                <div className="game-layout-container">
                    <div className="header-container">
                        <Header/>
                    </div>
                    <div className="players-container">
                        <PlayersLayout players={players}/>
                    </div>
                    <div className="footer-container">
                        <ButtonComponent 
                        start
                        disable ={players === undefined || players.length < 2 ? true : false}
                        redirect ={this.redirect}
                        />
                    </div>
                </div>
        );
    }
}



const mapStateToProps = state => ({
    newPlayers: state.playersList.players.players
})
export default withRouter(connect(mapStateToProps)(GameLayout));
