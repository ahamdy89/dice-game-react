import React, { Component } from 'react';
import GameNameForm from '../../components/forms/game-name-form/add-game-name';
import ButtonComponent from '../../components/button/button';
import {gameName} from '../../redux/actions/gameName';
import {connect} from 'react-redux';

import {Modal} from 'antd';


class Header extends Component {
    state = {
        newGameModal : false,
    }

    toggle = () => {
        this.setState({
            newGameModal : !this.state.newGameModal,
        })
    }

    handleSubmit = (values) => {
        this.props.gameName(values);
        this.setState({
            newGameModal : !this.state.newGameModal,
        })
    }

    render() {
        const name = this.props.newName;
        console.log(name)
        return (
            <div className="header-content">
                <ButtonComponent new click={this.toggle}/>
                {name.gameName === '' ? '' : <div><p>{name.gameName}</p></div>}
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
const mapStateToProps = state => ({
    // newName: state.gameName.name
    newName: state.playersList.name

})


export default connect(mapStateToProps, {gameName})(Header);