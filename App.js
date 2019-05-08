import React, { Component } from 'react';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Router from './src/components/Router';
import Sidebar from './src/components/Sidebar';
class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div className='container'>
        <Router />
        <Sidebar />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
