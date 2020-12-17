import React from 'react';
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
        <a class="btn-floating btn-large waves-effect waves-light amber darken-3 large" href="/weekendParty"><i class="material-icons">sentiment_very_satisfied</i></a>
        <h5>Weekend</h5>
            </div>
        <div className="col s12 m6 center align">
        <a class="btn-floating btn-large waves-effect waves-light amber darken-3 large" href="/ tictactoe"><i class="material-icons">grid_on</i></a>
        <h5>Tic Tac Toe</h5>
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