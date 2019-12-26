import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import GameLayout from './containers/game-layout/game-layout';
import PlayGround from './containers/play-ground/play-ground';

const App = () => {
  return (
        <div className="App">
          <Switch>
            <Route exact path="/" component={GameLayout}/>
            <Route path="/game" component={PlayGround}/>
            </Switch>
        </div>
  );
}

export default App;
