import React from 'react';
import {Row, Col} from 'antd';
import './players-layout.scss';
import PlayerCard from '../../components/player-card/player-card';


const PlayersLayout = ({players}) => {
    return (
                    <div className="players-box">
                        {/* {players === undefined ?
                        <div>
                            <p>No Players Added</p>
                        </div>   
                        :
                        players.map((player, index) => {
                            return (
                                <div key={index}>
                                    <PlayerCard player={player} number={index}/>
                                </div>
                            )
                        })} */}
                                    <PlayerCard/>
                                    <PlayerCard/>
                                    <PlayerCard/>
                                    <PlayerCard/>
                                    <PlayerCard/>
                                    <PlayerCard/>
                                    <PlayerCard/>
                                    <PlayerCard/>
                                    <PlayerCard/>
                                    <PlayerCard/>
                                    <PlayerCard/>
                                    <PlayerCard/>
                                    <PlayerCard/>


                    </div>

    )
}



export default PlayersLayout;