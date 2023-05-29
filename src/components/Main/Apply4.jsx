import React from 'react'
import styles from '../../style';
import { Navbar, Footer, Form4 } from "../../components";

const Apply4 = () => {
  return (
    <>
      <Navbar />

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Form4 />
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Apply4