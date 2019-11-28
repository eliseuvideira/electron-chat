import React from 'react';

function Conversation() {
  return (
    <div className="pane padded-more l-chat">
      <ul className="list-group l-chat-conversation">
        <li className="list-group-item">
          <div className="media-body">
            <time className="media-body__time">10.10.2010</time>
            <strong>Name:</strong>
            <p>Text...</p>
          </div>
        </li>
      </ul>
      <form className="l-chat-form">
        <div className="form-group">
          <textarea
            placeholder="Say something..."
            className="form-control"
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

export default Conversation;
