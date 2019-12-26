import React, { Component } from 'react';
import GameNameForm from '../../components/forms/game-name-form/add-game-name';
import ButtonComponent from '../../components/button/button';
import {Modal} from 'antd';


class Header extends Component {
    state = {
        newGameModal : false,
        gameName: ''
    }

    toggle = () => {
        this.setState({
            newGameModal : !this.state.newGameModal,
        })
    }

    handleSubmit = (values) => {
        this.setState({
            gameName: values.gameName,
            newGameModal: false
        })
    }

    render() {
        return (
            <div className="header-content">
                <ButtonComponent new click={this.toggle}/>
                {this.state.gameName === '' ? '' : <div><p>{this.state.gameName}</p></div>}
                <Modal
                    title="Enter Game Name"
                    visible={this.state.newGameModal}
                    onOk={this.handleSubmit}
                    onCancel={this.toggle}
                    footer={null}
                >
                <GameNameForm submit={this.handleSubmit}/>
                </Modal>
            </div>
        );
    }
}

export default Header;