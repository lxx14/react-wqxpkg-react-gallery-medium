import React, { Component } from 'react';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Router from './src/components/Router';
class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
