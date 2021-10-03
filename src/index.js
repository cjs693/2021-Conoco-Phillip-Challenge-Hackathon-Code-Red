import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link,Switch, Route} from 'react-router-dom';
import FirstAid from './firstaid';
import Firefight from './fire';
import './index.css';

function App(){
  return(
    <div>
      <h2>Safety and Risk - North America</h2>
      <ul>
        <li><Link to="/fire">Incident Recording Forms</Link></li>
        <li><Link to="/firstaid">DASHBOARD</Link></li>
      </ul>
      <Switch> 
      <Route path = "/fire"component = {Firefight}></Route>
      <Route path = "/firstaid"component = {FirstAid}></Route>
      </Switch>
    </div>
  )
}

ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>, document.getElementById("root"));