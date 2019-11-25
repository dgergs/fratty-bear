import React from 'react';

import About from './containers/About';
import Home from './containers/Home';
import GroupOrders from './containers/GroupOrders';
import UnderConstruction from './containers/UnderConstruction';
import PastWork from './containers/PastWork';
import NotFound from './containers/NotFound';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/group-orders" component={GroupOrders} />
          <Route path="/shop" component={UnderConstruction} />
          <Route path="/past-work" component={PastWork} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
