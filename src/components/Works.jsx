import React from 'react';
import { Navbar, Footer, Terminal } from '../components';
import styles from '../style';

const Works = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className={`${styles.paddingX} flex-grow ${styles.flexCenter}`}>
        <Terminal />
      </div>
      <div className={`p-10`}>
        <Footer />
      </div>
    </div>
  );
};

export default Works;
