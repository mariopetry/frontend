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

<nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Logo</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
    </div>
  </nav>

 


class Header extends React.Component {
     render() {
         return(   
             <Router>   
                   <StickyHeader
                  header={
                    <nav>
                    <div className="nav-wrapper amber darken-3">
                      <a href="/" class="brand-logo">Marioseinspiel</a>
                      <ul className="right hide-on-med-and-down">
                        <li><a href="/weekendParty"><i class="material-icons left">sentiment_very_satisfied</i>WeekendParty</a></li>
                        <li><a href="/tictactoe"><i class="material-icons left">grid_on</i>Tic Tac Toe</a></li>
                      </ul>
                      <ul class="sidenav" id="mobile-demo">
                          <li><a href="/weekendParty">WeekendParty</a></li>
                          <li><a href="/tictactoe">Tic Tac Toe</a></li>
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
