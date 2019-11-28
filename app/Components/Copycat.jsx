import React from 'react';
import { remote } from 'electron';

const Copycat = ({ children }) => {
  const onChange = (event) => {
    remote.getCurrentWindow().setTitle(event.target.value);
  };

  return (
    <div>
      <input placeholder="Start typing here" onChange={onChange} />
      <ul>{children}</ul>
    </div>
  );
};

export default Copycat;
