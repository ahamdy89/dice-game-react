import React, {Component} from 'react';
import AddForm from '../../components/add-player-form/add-player-form';
import './players-layout.scss';
import PlayerCard from '../../components/player-card/player-card';
import {Modal} from 'antd';
import { addPlayers } from '../../redux/actions/players';
import {connect} from 'react-redux';

class PlayersLayout extends Component {
    state = {
        modal : false,
    }

    toggle = () => {
        this.setState({
            modal : !this.state.modal,
        })
    }

    handleSubmit = (values) => {
        this.props.addPlayers(values);
        this.setState({modal: false})

    }



    render() {
        const players = this.props.players
    return (
            <div className="players-box">
                {players === undefined ? ''
                :
                players.map((player, index) => {
                    return <PlayerCard key={index} name={player} number={index + 1}/>
                })
                }
                <PlayerCard add click={this.toggle}/>
                <Modal
                    title="Add new players"
                    visible={this.state.modal}
                    onCancel={this.toggle}
                    footer={null}
                >
                    <AddForm submit={this.handleSubmit} values={players}/>
                </Modal>
            </div>
           )
 }

}


export default connect(null,{addPlayers})(PlayersLayout);