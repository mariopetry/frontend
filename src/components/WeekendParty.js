import React from 'react';
import axios from 'axios';


class WeekendParty extends React.Component {
constructor(props) {
super(props);
this.state = {
    gameRooms: [],
    name:'',
    password:'',
    player:[]

}
}

componentDidMount() {
    axios.get("http://springbootbackend-env.eba-bwahcv4m.eu-central-1.elasticbeanstalk.com/gameroom/get")
    .then((res)=> {
        this.setState({
            gameRooms :res.data
        })
    })
}

addGameRoom(event) {
    event.preventDefault();
    axios.post("http://springbootbackend-env.eba-bwahcv4m.eu-central-1.elasticbeanstalk.com/gameroom/post",{
        name : this.state.name,
        password : this.state.password,
        player : this.state.player
    });
}

render() {
    return(

        
        <div class="col s12 center align">
            <div class="container ">
            <input onChange={(e)=>this.setState({name:e.target.value})} value={this.state.name} type="text" id="autocomplete-input" placeholder={'Name'} className="autocomplete" />
                            <label htmlfor="autocomplete-input"></label>
            <input onChange={(e)=>this.setState({password:e.target.value})} value={this.state.password} type="password" id="autocomplete-input" placeholder={'Password'} className="autocomplete" />
                            <label htmlfor="autocomplete-input"></label>
             <button class="btn waves-effect waves-light amber darken-3" onClick={(event) => this.addGameRoom(event)} type="submit" name="action">Anlegen
                            <i class="material-icons right">send</i>
            </button>

                            </div>
        <div class="container ">
          <table className="centered">
                      <thead>
                        <tr>
                            <th>Name</th> 
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.gameRooms.map(gameRoom=>
                            <tr key={gameRoom.id}>
                              
                              <td className="td">{gameRoom.name}</td>
                              <td> <button onClick={(e) => console.log("Ich wurde gedrückt" + gameRoom.id)} className="btn waves-effect waves-light blue" type="submit" name="action">{gameRoom.name}</button></td>
                              
                            </tr>
                            )
                        }
                                 </tbody>
                      </table>
                </div>
          </div>
        
        
      

    )
}

}

export default WeekendParty;