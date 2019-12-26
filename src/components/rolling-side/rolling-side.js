import React, { Component } from 'react';
import ButtonComponent from '../button/button';
import {connect} from 'react-redux';
import {addCurrent} from '../../redux/actions/current';

import './rolling-side.scss';

class RollingSide extends Component {
    
    state = {
        dice: 0
    }
    
    rollDice = () => {
        // if (this.state.players.find(player => player.winner)) return;
    
        let dice = Math.floor(Math.random() * 6) + 1;
        this.setState({dice})
        this.props.addCurrent(dice);
    
      }



    render() {
        let dice = this.state.dice;
        let players = this.props.newPlayers;
        console.log(players)
        return (
            <div className="rolling-components">
                <div>
                    {players.map((player, index) => {
                        return <p key={index}>{player.active ? <p>{player.current}</p> : null}</p>
                    })}
                </div>
                <div className="dice-img">
                    {dice !== 1 && dice !== 0 ? <img src={require(`../../assets/dice-${dice}.png`)} alt={`dice-${dice}`}/> : null}
                </div>
                <div>
                    <ButtonComponent roll click={this.rollDice}/>
                </div>
                <div>
                    <ButtonComponent hold />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    newPlayers: state.playersList.players
})
export default connect(mapStateToProps,{addCurrent})(RollingSide);