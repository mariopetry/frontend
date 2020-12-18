import './App.css';
import Welcome from './components/Welcome';
import Chat from './components/Chat';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
 
      <div>
            <header>
                <Header />
            </header>
            <main>
                <Welcome /> 
                <Chat />
            </main>
            <footer>
                <Footer />
            </footer>
     </div> 
  );
}

export default App;
