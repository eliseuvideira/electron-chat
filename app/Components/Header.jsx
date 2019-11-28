import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <header>
      <h3>{title}</h3>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
