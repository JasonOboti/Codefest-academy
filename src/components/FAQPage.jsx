import React from 'react'
import styles from '../style'
import { Navbar, Footer, FAQ} from "../components";

const FAQPage = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                    <FAQ />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default FAQPage