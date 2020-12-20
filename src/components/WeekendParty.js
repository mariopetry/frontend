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
    
    WeekendParty: {
      id: 1
    },
    gameRooms: [],
    id:'',
    name:'',
    password:'',
    player:[],

    sendId:'',
    sendName:'',
    sendPassword:'',

}
this.addGameRoom = this.addGameRoom.bind(this);
this.setGameRoom = this.setGameRoom.bind(this);
}


componentDidMount() {
    axios.get("http://localhost:5000/gameroom/get")
    .then((res)=> {
        this.setState({
            
            gameRooms :res.data,
            id:'',
            name:'',
            password:'',
        })
    })
}

addGameRoom() {
   
    axios.post("http://localhost:5000/gameroom/post",{
        name : this.state.name,
        password : this.state.password,
        player : this.state.player,
        weekendParty: {
          id: 1,
          gameRooms: this.state.gameRooms
        } 
    });
   
}

setGameRoom(event,password,name,id) {
  event.preventDefault();
  console.log(id + "" + name);
    this.setState({
        sendId:id,
        sendName:name,
        sendPassword : password
  })
}

render() {
    return(

        <Router>
        <div className="col s12 center align">
<br></br>
<br></br>
<br></br>
            <div className="container ">
            <input id ="roomname" onChange={(e)=>this.setState({name:e.target.value})} value={this.state.name} type="text"  placeholder={'Name'} className="autocomplete" />
                            <label htmlfor="autocomplete-input"></label>
            <input id="roompassword" onChange={(e)=>this.setState({password:e.target.value})} value={this.state.password} type="password"  placeholder={'Password'} className="autocomplete" />
                            <label htmlfor="autocomplete-input"></label>
             <button className="btn waves-effect waves-light amber darken-3" onClick={() => this.addGameRoom()} type="submit" name="action">Anlegen
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
                              <td><a className="btn-floating btn-large waves-effect waves-light amber darken-3" href="/weekendParty/gameroom" onClick={(event) => this.setGameRoom(event,gameRoom.password,gameRoom.name,gameRoom.id)}  ><i class="material-icons">toys</i></a></td>
                              
                            </tr>
                            )
                        }
                                 </tbody>
                      </table>
                      
                </div>
          </div>
          <Switch>
          <Route path="/weekendParty/gameroom">
                <GameRoom name = {this.state.sendName} password = {this.state.sendPassword} id = {this.state.sendId} />
              </Route>
          </Switch>
</Router>


        
        
      

    )
}

}

export default WeekendParty;