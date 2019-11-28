import React from 'react';
import Participants from './Participants';
import Conversation from './Conversation';

function ChatPane() {
  return (
    <div className="pane-group">
      <Participants />
      <Conversation />
    </div>
  );
}

export default ChatPane;
