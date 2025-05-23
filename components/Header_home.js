import React from 'react';

const Header_home = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Poptalk</h1>
	  <h2 style={styles.sub_title}>By group 1</h2>
    </header>
  );
};

const styles = {
  header: {
	background: "url('/poptalk_home.jpg') no-repeat right center / cover",
    padding: '5px',
	width: '1000px',
	height: '400px',
    textAlign: 'center',
  },
  title: {
    fontSize: '8rem',
    margin: 0,
	lineHeight: '300px',
	color: '#7d7d7d', // ← フォント色を指定
  },
  sub_title: {
	color: '#7d7d7d', // ← フォント色を指定
	fontSize: '4rem',
    margin: 0,
	lineHeight: '50px',
  },
};

export default Header_home;