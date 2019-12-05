import React from 'react';
import moment from 'moment';

function Participants({ users }) {
  return (
    <div className="pane pane-sm sidebar">
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.username} className="list-group-item">
            <div className="media-body">
              <strong>
                <span className="icon icon-user"></span>&nbsp;{user.username}
              </strong>
              <p>Joined {moment(user.datetime).fromNow()}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Participants;
