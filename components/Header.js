import { Covered_By_Your_Grace } from 'next/font/google';
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
	  width: '1500px',
	  height: '50px',
    textAlign: 'center',
	  position: 'fixed', 
    top: 0,
  },
  title: {
    color: 'black',
    fontSize: '2rem',
    margin: 0,
	lineHeight: '50px',
  },
};

export default Header;