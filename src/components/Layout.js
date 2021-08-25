import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.instanceOf(Object),
};

Layout.defaultProps = { children: null };
