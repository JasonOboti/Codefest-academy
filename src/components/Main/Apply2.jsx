import React from 'react'
import styles from '../../style';
import { Navbar, Footer, Form2 } from "../../components";

const Apply2 = () => {
  return (
    <>
      <Navbar />

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Form2 />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Apply2