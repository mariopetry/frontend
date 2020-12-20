import React from 'react';
import axios from 'axios';


class GameRoom extends React.Component {

  constructor(props) {
    
    super(props);
    this.state = {
        id: this.props.id,
        roomName:this.props.name,
        roomPassword:this.props.password,
        player:[],

        userPassword:'',
        userName: '',
    
      }
    }

    componentWillReceiveProps(nextProps){
      if(nextProps.name!==this.props.roomName){
        axios.get("http://localhost:5000/gameroom/get/" + nextProps.id)
    .then((res)=> {
        this.setState({
            id:res.data.id,
            roomName:res.data.name,
            roomPassword:res.data.password,
        })
    })
      }
    }

    goIntoGameRoom(){
      console.log(this.state.roomPassword + "===" + this.state.userPassword)
      if(this.state.roomPassword === this.state.userPassword) {
       this.addPlayer();
      }else {
        console.log("Leider war das Passwort falsch")
      }
    }

    addPlayer() {
      
      axios.post("http://localhost:5000/player/post",{
          name : this.state.userName,
          gameRoom: {
            id: this.state.id,
            name: this.state.roomName,
            password: this.state.roomPassword
          }  
         
      }).then(() => {
        axios.get("http://localhost:5000/player/gameroom/get/"+ this.state.id).then((res) => {
          console.log(res.data)
          this.setState({ 
            player: res.data
          });
        });
      });
  }

  render() {
    return(

        <div className="col s12 center align">  
        <h1>{this.state.roomName}</h1>              
        <br></br>
<br></br>
<br></br>
            <div className="container ">
            <input id ="name" onChange={(e)=>this.setState({userName:e.target.value})} value={this.state.userName} type="text"  placeholder={'Name'} className="autocomplete" />
                            <label htmlfor="autocomplete-input"></label>
            <input id="userpassword" onChange={(e)=>this.setState({userPassword:e.target.value})} value={this.state.userPassword} type="password"  placeholder={'Password'} className="autocomplete" />
                            <label htmlfor="autocomplete-input"></label>
             <button className="btn waves-effect waves-light amber darken-3" onClick={() => this.goIntoGameRoom()} type="submit" name="action">Spiel beitreten
                            <i class="material-icons right">send</i>
            </button>

            <table className="centered">
                      <thead>
                        <tr>
                            <th>Name</th> 
                             
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.player.map(player=>
                            <tr key={player.id}>
                              
                              <td className="td">{player.name}</td>
                          
                            </tr>
                            )
                        }
                                 </tbody>
                      </table>
<br></br>
<br></br>
<br></br>
</div>

      </div>
      
    )
}
}
export default GameRoom;