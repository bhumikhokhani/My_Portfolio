import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Work from './components/Cards';
import ContactMe from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Work' component={Work} />
          <Route path='/ContactMe' component={ContactMe} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
