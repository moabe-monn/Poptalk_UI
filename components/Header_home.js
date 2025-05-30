import React from 'react';
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

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
    fontFamily: "'Josefin Sans'", //Cherry Bomb One
    padding: '0px',
    width: '100%',            // ← 固定幅をやめる
    maxWidth: '600px',        // ← 背景と揃える
    height: '150px',
    textAlign: 'center',
  },
  title: {
    fontSize: '6rem',
    margin: 0,
    lineHeight: '8px',
    color:'#F26939', // ← フォント色を指定#F36C21
  },
  sub_title: {
    color: '#F26939', // ← フォント色を指定#F36C21
    fontSize: '3rem',
    margin: 0,
	  lineHeight: '50px',
    padding: '50px',
  },
};

export default Header_home;
