import React, { Component } from 'react';
import { remote } from 'electron';

const win = remote.getCurrentWindow();

class Header extends Component {
  state = {
    isMaximized: win.isMaximized(),
  };

  restore = () => {
    win.restore();
  };

  maximize = () => {
    win.maximize();
  };

  close = () => {
    win.close();
  };

  refreshState = () => {
    this.setState({ isMaximized: win.isMaximized() });
  };

  componentWillMount() {
    win.on('maximize', this.refreshState);
    win.on('unmaximize', this.refreshState);
  }

  render() {
    return (
      <header className="toolbar toolbar-header">
        <div className="toolbar-actions">
          <button className="btn btn-default pull-right" onClick={this.close}>
            <span className="icon icon-cancel" />
          </button>
          {this.state.isMaximized ? (
            <button
              className="btn btn-default pull-right"
              onClick={this.restore}
            >
              <span className="icon icon-resize-small"></span>
            </button>
          ) : (
            <button
              className="btn btn-default pull-right"
              onClick={this.maximize}
            >
              <span className="icon icon-resize-full"></span>
            </button>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
