import React from 'react'
import styles from '../style';
import { Navbar, Footer, ImageCardList} from "../components";
import slide_image_1 from "../assets/Photos/Apply (1).jpg";
import slide_image_2 from "../assets/Photos/Apply (2).jpg";
import slide_image_3 from "../assets/Photos/Apply (5).jpg";
import slide_image_4 from "../assets/Photos/Apply (3).jpg";
import slide_image_5 from "../assets/Photos/Apply (4).jpg";


const imageData = [
  {
    image: slide_image_1,
    writeup: 'STEM (Coding) School',
    to: '/apply-STEM'
  },
  {
    image: slide_image_2,
    writeup: 'IT Courses 1 - 3 months',
    to: '/apply-IT'
  },
  {
    image: slide_image_3,
    writeup: 'IT career training and Job placement',
    to: '/apply-IT-program'
  },
  {
    image: slide_image_4,
    writeup: 'Diploma program',
    to: '/apply-diploma'
  },
  {
    image: slide_image_5,
    writeup: 'Center leasing/CBT',
    to: '/apply-CBT',
  },
  // Add more data objects for additional cards
];

const Apply = () => {
  return (
    <>
      <Navbar />

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <ImageCardList cardData={imageData} />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Apply