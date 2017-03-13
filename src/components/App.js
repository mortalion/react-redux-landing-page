import React, { Component } from 'react';
import Header from './Header';
import NowSection from './NowSection';
import RolesSection from './RolesSection';
import ThenSection from './ThenSection';
import ClientsSection from './ClientsSection';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NowSection />
        <RolesSection />
        <ThenSection />
        <ClientsSection />
        <Footer />
      </div>
    );
  }
}

export default App;
