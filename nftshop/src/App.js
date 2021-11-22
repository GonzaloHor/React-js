
import './App.css';
import NavBar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';


function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <ItemListContainer img="https://lorempixel.com/200/200/business/" imgdos="https://lorempixel.com/200/200/animals/" />
      </header>
    </div>
  );
}

export default App;
