import React from 'react';
import * as manifest from '../../package.json';

function Footer() {
  return (
    <footer className="toolbar toolbar-footer">
      <h1 className="title">
        {manifest.name} v.{manifest.version}
      </h1>
    </footer>
  );
}

export default Footer;
