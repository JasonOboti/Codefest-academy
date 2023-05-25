import React from 'react'
import styles from '../style';
import { Navbar, Footer, ImageCardList } from "../components";
import slide_image_1 from "../assets/Photos/Background (3).jpg";
import slide_image_2 from "../assets/Photos/Background (3).jpg";


const imageData = [
  {
    image: slide_image_1,
    writeup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    to: '/apply-STEM',
  },
  {
    image: slide_image_2,
    writeup: 'Vestibulum eget lectus ut turpis vulputate imperdiet.',
    to: '/apply-IT'
  },
  {
    image: slide_image_2,
    writeup: 'Vestibulum eget lectus ut turpis vulputate imperdiet.',
    to: '/apply-IT-program'
  },
  {
    image: slide_image_2,
    writeup: 'Vestibulum eget lectus ut turpis vulputate imperdiet.',
    to: '/apply-diploma'
  },
  {
    image: slide_image_2,
    writeup: 'Vestibulum eget lectus ut turpis vulputate imperdiet.',
    to: '/apply-CBT'
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