import React from 'react';
import Participants from './Participants';
import Conversation from './Conversation';

function ChatPane({ users, messages, onSubmit }) {
  return (
    <div className="pane-group">
      <Participants users={users} />
      <Conversation messages={messages} onSubmit={onSubmit} />
    </div>
  );
}

export default ChatPane;
