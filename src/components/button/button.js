import React from 'react';
import {Button} from 'antd';
import { Link, withRouter } from 'react-router-dom';



const ButtonComponent = (props) => {
    return (
        <div>
            <Button 
            onClick={props.redirect ? props.redirect : 
            props.click ? props.click : null} 
            disabled={props.disable ? true : false}
            >
                
                {props.new ? 'New Game'
                :props.start ? 'Start Game'
                :props.roll ? 'Roll Dice'
                :props.hold ? 'Hold'
                :''
                }
                {props.redirect ? <Link to="/game"/> : null}
            </Button>
        </div>
    )
}


export default withRouter(ButtonComponent);