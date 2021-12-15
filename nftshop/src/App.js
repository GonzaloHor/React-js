
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import ItemsByCategory from './components/ItemsByCategory/ItemsByCategory';
import Card from './components/Card/Card';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
      <main>
        <Switch>

        <Route exact path='/'>
        <ItemListContainer /> 
        </Route>
        
        <Route path='/detail/:paramId'>
        <ItemDetailContainer />
        </Route>

        <Route path='/category/:categoryid'>
        <ItemsByCategory />
        </Route>

        <Route path='/card'>
        <Card />
        </Route>
      
        </Switch>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
