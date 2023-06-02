import React from 'react'
import styles from '../style'
import {Footer, Navbar, PartnerCarousel} from "../components";

const Works = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                    <PartnerCarousel />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Works