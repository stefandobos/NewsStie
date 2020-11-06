import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register'
import News_1 from './components/Pages/News/News_1';

function App() {
  return (
    <div className="App">
      <Router> 
        <Navbar />
        <Switch> 
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/news_1' exact component={News_1} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
