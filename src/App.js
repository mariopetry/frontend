import './App.css';
import GameLobby from './components/GameLobby';
import MarioSeinSpiel from './components/pictures/marioseinspiel.png';

function App() {
  return (
    <div className="App">
      <header >
      <img className="header_img" src={MarioSeinSpiel}  />
      </header>
      <body>
        <GameLobby />

      </body>
    </div>
  );
}

export default App;
