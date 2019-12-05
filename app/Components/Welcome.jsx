import React, { Component } from 'react';

class Welcome extends Component {
  state = {
    name: '',
  };

  change = (event) => {
    this.setState({ name: event.target.value });
  };

  submit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    return (
      <div className="pane padded-more">
        <form onSubmit={this.submit}>
          <div className="form-group">
            <label>Tell me your name</label>
            <input
              className="form-control"
              placeholder="Name"
              onChange={this.change}
              value={this.state.name}
              required
            />
          </div>
          <div className="form-actions">
            <button className="btn btn-form btn-primary">OK</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Welcome;
