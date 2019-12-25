import React, { Component } from 'react';
import {connect} from 'react-redux';
import './game-layout.scss';
// import AddForm from '../../components/add-form/form';
import { addPlayers } from '../../redux/actions/players';
import {Row, Col, Modal, Button } from 'antd';
import PlayersLayout from '../players-layout/players-layout';



class GameLayout extends Component {
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

    componentDidMount () {
        const players = this.props.newPlayers;
        console.log(players)
    }


    render() {
        const players = this.props.newPlayers;
        console.log(players)
        return (
                        <div className="game-layout-container">
                                    <div className="header-container">
                                            <div className="add-player-button">
                                                <Button type="primary" onClick={this.toggle}>Add New Player</Button>
                                                <Modal
                                                    title="Add new players"
                                                    visible={this.state.modal}
                                                    onCancel={this.toggle}
                                                    footer={null}
                                                >
                                                    {/* <AddForm submit={this.handleSubmit}/> */}
                                                </Modal>
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
export default connect(mapStateToProps,{addPlayers})(GameLayout);
