import React from 'react';
import axios from 'axios';
import GameRoom from './GameRoom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";


class WeekendParty extends React.Component {
constructor(props) {
super(props);
this.state = {
    WeekendParty:1,
    gameRooms: [],
    name:'',
    password:'',
    player:[]

}
}

componentDidMount() {
    axios.get("http://localhost:5000/gameroom/get")
    .then((res)=> {
        this.setState({
            id:0,
            gameRooms :res.data,
            name:'',
            password:'',
        })
    })
}

addGameRoom(event) {
    event.preventDefault();
    axios.post("http://localhost:5000/gameroom/post",{
        name : this.state.name,
        password : this.state.password,
        player : this.state.player,
        weekendParty: this.state.weekendParty
    }).then(() =>  this.componentDidMount());
   
}

setGameRoomID(id) {
    this.setState({
        id:id
  })
  console.log("Ich wurde gedrückt")
}

render() {
    return(

        <Router>
        <div className="col s12 center align">
<br></br>
<br></br>
<br></br>
            <div className="container ">
            <input id ="name" onChange={(e)=>this.setState({name:e.target.value})} value={this.state.name} type="text"  placeholder={'Name'} className="autocomplete" />
                            <label htmlfor="autocomplete-input"></label>
            <input id="password" onChange={(e)=>this.setState({password:e.target.value})} value={this.state.password} type="password"  placeholder={'Password'} className="autocomplete" />
                            <label htmlfor="autocomplete-input"></label>
             <button className="btn waves-effect waves-light amber darken-3" onClick={(event) => this.addGameRoom(event)} type="submit" name="action">Anlegen
                            <i class="material-icons right">send</i>
            </button>
<br></br>
<br></br>
<br></br>
                            </div>
        <div className="container ">
          <table className="centered">
                      <thead>
                        <tr>
                            <th>Name</th> 
                            <th>Beitreten</th> 
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.gameRooms.map(gameRoom=>
                            <tr key={gameRoom.id}>
                              
                              <td className="td">{gameRoom.name}</td>
                              <td><a className="btn-floating btn-large waves-effect waves-light amber darken-3"  href="/weekendParty/gameroom"><i class="material-icons">toys</i></a></td>
                              
                            </tr>
                            )
                        }
                                 </tbody>
                      </table>
                </div>
          </div>
          <Switch>
          <Route path="/weekendParty/gameroom">
                <GameRoom />
              </Route>
          </Switch>
</Router>


        
        
      

    )
}

}

export default WeekendParty;