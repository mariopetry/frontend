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
    axios.get("http://SpringBootBackend-env.eba-bwahcv4m.eu-central-1.elasticbeanstalk.com/gameroom/get")
    .then((res)=> {
        this.setState({
            gameRooms :res.data
        })
    })
}

addGameRoom(event) {
    event.preventDefault();
    axios.post("http://SSpringBootBackend-env.eba-bwahcv4m.eu-central-1.elasticbeanstalk.com /gameroom/post",{
        name : this.state.name,
        password : this.state.password,
        player : this.state.player
    });
}

render() {
    return(

        
        <div className="col s12 center align">
            <div className="container ">
            <input id ="name" onChange={(e)=>this.setState({name:e.target.value})} value={this.state.name} type="text"  placeholder={'Name'} className="autocomplete" />
                            <label htmlfor="autocomplete-input"></label>
            <input id="password" onChange={(e)=>this.setState({password:e.target.value})} value={this.state.password} type="password"  placeholder={'Password'} className="autocomplete" />
                            <label htmlfor="autocomplete-input"></label>
             <button class="btn waves-effect waves-light amber darken-3" onClick={(event) => this.addGameRoom(event)} type="submit" name="action">Anlegen
                            <i class="material-icons right">send</i>
            </button>

                            </div>
        <div className="container ">
          <table className="centered">
                      <thead>
                        <tr>
                            <th>Name</th> 
                            <th>Los</th> 
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.gameRooms.map(gameRoom=>
                            <tr key={gameRoom.id}>
                              
                              <td className="td">{gameRoom.name}</td>
                              <td> <button onClick={(e) => console.log("Ich wurde gedrückt" + gameRoom.id)} className="btn waves-effect waves-light amber darken-3" type="submit" name="action">Beitreten</button></td>
                              
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