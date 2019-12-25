import React from 'react';
import {Row, Col} from 'antd';
import './players-layout.scss';
// import NewPlayer from '../../components/new-player/new-player';


const PlayersLayout = ({players}) => {
    return (
                    <div className="players-box">
                        {players === undefined ?
                        <div>
                            <p>No Players Added</p>
                        </div>   
                        :
                        players.map((player, index) => {
                            return (
                                <div key={index}>
                                    {/* <NewPlayer player={player} number={index}/> */}
                                </div>
                            )
                        })}
                    </div>

    )
}



export default PlayersLayout;