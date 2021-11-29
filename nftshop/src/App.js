
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemCounter from './ItemCounter/ItemCounter';



function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main className="container d-flex justify-content-center">
        <ItemListContainer img="https://picsum.photos/400/300?grayscale"/>
        <ItemCounter img="https://picsum.photos/400/300?grayscale" inital="0" stock="7"/>
      </main>
    </div>
  );
}

export default App;
