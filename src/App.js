import React from 'react';
import './App.css';
import {Row, Col} from 'antd';

import GameLayout from './containers/game-layout/game-layout';

function App() {
  return (
      <Row>
        <Col>
        <div>
          <GameLayout/>
        </div>
        </Col>
      </Row>
  );
}

export default App;
