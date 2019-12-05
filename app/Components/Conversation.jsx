import React, { Component } from 'react';
import moment from 'moment';

class Conversation extends Component {
  state = {
    message: '',
  };

  change = (event) => {
    this.setState({ message: event.target.value });
  };

  submit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };

  componentDidMount() {
    this.refDiv = React.createRef();
  }

  componentDidUpdate(props) {
    if (props.messages !== this.props.messages) {
      this.refDiv.current.scrollTop = this.refDiv.current.scrollHeight;
    }
  }

  render() {
    return (
      <div className="pane padded-more l-chat">
        <ul className="list-group l-chat-conversation" ref={this.refDiv}>
          {this.props.messages.map((message) => (
            <li key={message.datetime} className="list-group-item">
              <div className="media-body">
                <time className="media-body__time">
                  {moment(message.datetime).format('LLL')}
                </time>
                <strong>{message.username}:</strong>
                <p>{message.message}</p>
              </div>
            </li>
          ))}
        </ul>
        <form className="l-chat-form" onSubmit={this.submit}>
          <div className="form-group">
            <textarea
              placeholder="Say something..."
              className="form-control"
              onChange={this.change}
              value={this.state.message}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-form btn-primary">OK</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Conversation;
