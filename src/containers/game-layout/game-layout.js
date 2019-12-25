import React, { Component } from 'react';
import {connect} from 'react-redux';
import './game-layout.scss';
// import NewPlayers from '../new-players/new-players';
// import AddForm from '../../components/add-form/form';
import { addPlayers } from '../../redux/actions/players';
import {Row, Col, Modal, Button } from 'antd';



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


    render() {
        const players = this.props.newPlayers;
        console.log(players)
        return (
                <Row>
                    <Col>
                        <div className="ground-container">
                            <div className="header-container">
                                <Col sm="1" md="3">
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
                                </Col>
                            </div>
                            {/* <NewPlayers players={players}/> */}
                        </div>
                    </Col>
                </Row>
        );
    }
}



// const mapStateToProps = state => ({
//     newPlayers: state.playersList.players.players
// })
export default GameLayout;