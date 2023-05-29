import React from 'react'
import styles from '../../style';
import { Navbar, Footer, Form2 } from "../../components";

const Apply2 = () => {
  return (
    <>
      <Navbar />

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="absolute z-[3] -right-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -right-1/2 bottom-0 rounded-full pink__gradient" />
          <Form2 />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Apply2