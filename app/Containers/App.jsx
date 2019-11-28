import React from 'react';
import ChatPane from '../Components/ChatPane';
import Welcome from '../Components/Welcome';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const App = () => {
  const name = 'Name';
  return (
    <div className="window">
      <Header />
      <div className="window-content">{name ? <ChatPane /> : <Welcome />}</div>
      <Footer />
    </div>
  );
};

export default App;
