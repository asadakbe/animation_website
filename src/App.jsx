import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Services';
import Contact from './components/Contact';
import { Switch, Route, Redirect } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
   <>
     <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/service" component={Service} />
        <Route path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
   </>
  );
}

export default App;
