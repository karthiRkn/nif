import Login from './Components/Login'
import Home from './Components/Home'
import './App.css';
import {BrowserRouter,Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
  
  );
}

export default App;
