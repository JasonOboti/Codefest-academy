import React from 'react'
import styles from '../style'
import { Navbar, Footer, Info } from "../components";

const About = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                    <Info />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default About