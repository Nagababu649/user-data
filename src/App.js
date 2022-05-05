import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
       
        <Header/>
        <Main />
        <Footer />

        <Switch>
              <Route exact path='/' component={Home} /> 
              <Route exact path='/home' component={Home} />
              <Route path='/contactus' component={Contact} />
              <Route path='/aboutus' component={About} />
              <Route path='/login' component={Login} />
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
