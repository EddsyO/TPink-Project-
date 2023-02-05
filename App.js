import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Switch, Router, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Donate';
import SignUp from './components/pages/SignUp';
import Donate from './components/pages/Donate';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/donate' component={Donate} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;