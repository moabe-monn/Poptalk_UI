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
	background: "url('/Poptalk_image.jpg') no-repeat right center / cover",
    padding: '0px',
	width: '1000px',
	height: '0px',
    textAlign: 'center',
  },
  title: {
    fontSize: '6rem',
    margin: 0,
	lineHeight: '200px',
	color: '#FFFFFF', // ← フォント色を指定
  },
  sub_title: {
	color: '#FFFFFF', // ← フォント色を指定
	fontSize: '3rem',
    margin: 0,
	lineHeight: '50px',
  },
};

export default Header_home;