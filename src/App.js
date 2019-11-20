import React from 'react';
import{Switch, Route} from 'react-router-dom';
import ListGame from './components/ListGame';
import Screenshot from './components/Screenshot';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ListGame} />
        <Route path="/screenshot/:id" component={Screenshot} />
      </Switch>
    </div>
  );
}

export default App;
