import React from 'react'
import styles from '../../style';
import { Navbar, Footer, Form3 } from "../../components";

const Apply3 = () => {
  return (
    <>
      <Navbar />

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Form3 />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Apply3