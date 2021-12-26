
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Card from './components/Card/Card';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext'



function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
        <main>
          <Routes>

          <Route path='/' element={<ItemListContainer />}/>

          <Route path='detail/:paramId' element={<ItemDetailContainer />}/>
    
          <Route path='category/:categoryId' element={<ItemListContainer />}/>
          
          <Route path='card' element={<Card />}/>
        
          </Routes>
        </main>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
