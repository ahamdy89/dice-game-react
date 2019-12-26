import React, { Component } from 'react'
import './rolling-side.scss';


class RollingSide extends Component {
    render() {
        return (
            <div className="rolling-components">
                <div>
                    <p>20</p>
                </div>
                <div>
                    <p>Dice</p>
                </div>
                <div>
                    <button>Roll Dice</button>
                </div>
                <div>
                    <button>Hold</button>
                </div>
            </div>
        )
    }
}
export default RollingSide;