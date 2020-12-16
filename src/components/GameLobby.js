import React from 'react';
import WeekendPicture from './pictures/WeekendGamePicture.png';
import TicTacToePicture from './pictures/tictactoe.png'
import WeekendParty from './WeekendParty';
import TicTacToe from './TicTacToe';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class GameLobby extends React.Component {
constructor(props) {
super(props);
}

render() {
    return(
<Router>
        <div className="row">
        <div className="col s12 m6 center align">
          <a href="/weekendParty">
            <img className="fixed_img" src={WeekendPicture}  />
            </a>
            </div>
        <div className="col s12 m6 center align">
          <a href="/tictactoe">
            <img className="fixed_img" src={TicTacToePicture}  />
            </a>
            </div>
      </div>
      <Switch>
              <Route path="/weekendParty">
                <WeekendParty />
              </Route>
              <Route path="/tictactoe">
                <TicTacToe />
              </Route>
             
            </Switch>
      </Router>
    )
}

}

export default GameLobby;