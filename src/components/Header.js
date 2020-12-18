import React from "react";
import StickyHeader from 'react-sticky-header';
import 'react-sticky-header/styles.css';
import WeekendParty from './WeekendParty';
import TicTacToe from './TicTacToe';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";


class Header extends React.Component {
     render() {
         return(   
             <Router>   
                   <StickyHeader
                  header={
                    <nav>
                    <div class="nav-wrapper amber darken-3">
                      <a href="/" class="brand-logo">Marioseinspiel</a>
                      <ul class="right hide-on-med-and-down">
                        <li><a href="/weekendParty"><i class="material-icons left">sentiment_very_satisfied</i>WeekendParty</a></li>
                        <li><a href="/tictactoe"><i class="material-icons left">grid_on</i>Tic Tac Toe</a></li>
                      </ul>
                    </div>
                  </nav>
                      
                       
                  }
                >      
                </StickyHeader> 
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
         
export default Header;
