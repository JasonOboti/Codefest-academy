import React from 'react'
import styles from '../../style';
import { Navbar, Footer } from "../../components";

const Apply4 = () => {
  return (
    <>
      <Navbar />

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Apply4