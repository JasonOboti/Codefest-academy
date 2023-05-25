import React from 'react'
import styles from '../../style';
import { Navbar, Footer, Form1 } from "../../components";

const Apply1 = () => {
    return (
        <>
            <Navbar />

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Form1 />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Apply1