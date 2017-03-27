import React, { Component } from 'react';
import ReactGA from 'react-ga'; // React Google Analytics
import Header from './Header';
import NowSection from './NowSection';
import ThenSection from './ThenSection';
import RolesSection from './RolesSection';
import ClientsSection from './ClientsSection';
import AboutSection from './AboutSection';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    // This is my unique Google Analytics ID for this site
    // Don't use it for your site; use your own!
    ReactGA.initialize('UA-46873862-3');
    // Since this is a single page app with no routing, we
    // only need this one pageview call when the app loads.
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div>
        <Header />
        <NowSection />
        <ThenSection />
        <RolesSection />
        <ClientsSection />
        <AboutSection />
        <Footer />
      </div>
    );
  }
}

export default App;
