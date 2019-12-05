import React, { Component } from 'react';
import ChatPane from '../Components/ChatPane';
import Welcome from '../Components/Welcome';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import socket from '../Services/socket';

class App extends Component {
  state = {
    name: '',
    users: [],
    messages: [],
  };

  onSubmitUser = (name) => {
    this.setState({ name });
    socket.emit('create-user', name);
  };

  onSubmitMessage = (message) => {
    socket.emit('create-message', message);
  };

  componentDidMount() {
    socket.on('connect', () => {
      socket.on('users', (users) => {
        this.setState({ users });
      });
      socket.on('messages', (messages) => {
        this.setState({ messages });
      });
    });
  }

  render() {
    return (
      <div className="window">
        <Header />
        <div className="window-content">
          {this.state.name ? (
            <ChatPane
              users={this.state.users}
              messages={this.state.messages}
              onSubmit={this.onSubmitMessage}
            />
          ) : (
            <Welcome onSubmit={this.onSubmitUser} />
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
