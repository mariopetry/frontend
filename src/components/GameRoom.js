import React from 'react';
import Spielbrett from './pictures/spielbrettneu.png'


class GameRoom extends React.Component {

  render() {
    return(

        <div className="col s12 center align">                
<br></br>
<br></br>
<br></br>
<img className = "fixed_img" src={Spielbrett} alt="this is the gamefield" />
        
      </div>
      
    )
}
}
export default GameRoom;