import React from 'react'
import styles from '../style'
import { Navbar, Footer, Terminal} from "../components";

const Works = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                    <Terminal />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Works