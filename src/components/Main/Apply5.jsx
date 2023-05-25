import React from 'react'
import styles from '../../style';
import { Navbar, Footer, Form5 } from "../../components";

const Apply5 = () => {
  return (
    <>
      <Navbar />

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Form5 />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Apply5