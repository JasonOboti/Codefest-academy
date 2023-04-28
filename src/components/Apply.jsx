import React from 'react'
import styles from '../style';
import { Form, Navbar, Footer, BackgroundImage } from "../components";

const Apply = () => {
  return (
    <>
      <Navbar />

      <Form />
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Apply