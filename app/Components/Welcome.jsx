import React from 'react';

function Welcome() {
  return (
    <div className="pane padded-more">
      <form>
        <div className="form-group">
          <label>Tell me your name</label>
          <input className="form-control" placeholder="Name" required />
        </div>
        <div className="form-actions">
          <button className="btn btn-form btn-primary">OK</button>
        </div>
      </form>
    </div>
  );
}

export default Welcome;
