import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MyNav from '../components/MyNav';
import Routes from '../helpers/Routes';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <Router>
        <MyNav />
        <Routes />
      </Router>
    );
  }
}

export default App;
