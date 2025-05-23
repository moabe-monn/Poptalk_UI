import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Poptalk</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#FFFFFF',
    padding: '5px',
	width: '1000px',
	height: '50px',
    textAlign: 'center',
  },
  title: {
    color: 'black',
    fontSize: '2rem',
    margin: 0,
  },
};

export default Header;