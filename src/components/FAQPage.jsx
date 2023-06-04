import React from 'react';
import { Navbar, Footer, FAQ } from '../components';
import styles from '../style';

const FAQPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className={`${styles.paddingX} flex-grow ${styles.flexCenter}`}>
        <FAQ />
      </div>
      <div className={`p-10`}>
        <Footer />
      </div>
    </div>
  );
};

export default FAQPage;
