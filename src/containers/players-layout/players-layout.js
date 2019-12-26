import React, {Component} from 'react';
import AddForm from '../../components/forms/add-player-form/add-player-form';
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

    // componentDidMount() {

    //     const arr = ["ahmed","hamdy"]
    //     const locations = [];
    //     for (var i = 0; i < arr.length; i++) {
    //         locations.push({
    //             name: arr[i],
    //             current:0,
    //             winner:false
    //         });
    //     }
    //     console.log(locations)
    // }


    render() {
        const {players, game} = this.props
    return (
            <div className="players-box">

                {players.map((player, index) => {
                    return <PlayerCard key={index} name={player.name} number={index + 1}/>
                })}

                {game ? 
                    null
                
                :
                    <PlayerCard add click={this.toggle}/>
                }
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