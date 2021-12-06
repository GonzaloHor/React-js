
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemCounter from './components/ItemCounter/ItemCounter.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';




function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
       {/* <ItemListContainer />  */}
       <ItemDetailContainer itemId={1} />
      </main>
    </div>
  );
}

export default App;
