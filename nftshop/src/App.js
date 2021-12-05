
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemCounter from './components/ItemCounter/ItemCounter.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
       <ItemListContainer /> 
      </main>
    </div>
  );
}

export default App;
