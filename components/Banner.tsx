// import Image from 'next/image'
import styles from '../styles/components/Banner.module.css'
const Banner = ({ bannerPath }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.waveTop}>
        <svg width="1440" height="174" viewBox="0 0 1440 174" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 87.3907L60 72.3907C120 58.3907 240 29.3907 360 43.3907C480 58.3907 600 115.391 720 108.391C840 101.391 960 29.3907 1080 7.39071C1200 -13.6093 1320 15.3907 1380 29.3907L1440 43.3907V173.391H1380C1320 173.391 1200 173.391 1080 173.391C960 173.391 840 173.391 720 173.391C600 173.391 480 173.391 360 173.391C240 173.391 120 173.391 60 173.391H0V87.3907Z" fill="white" />
        </svg>
      </div>
      <div className={styles.content}>
        <h1>ANANTARA</h1>
        <p>Body Spa</p>
        <div className={styles.underline}></div>
      </div>

      {/* <div className={styles.cover}>
        <Image
          src={bannerPath}
          alt='bannerImg'
          width={500}
          height={500}
          className={styles.img}
        />
        
      </div> */}
      {/* <Image 
      src={ bannerPath }
      alt='bannerImg'
      width={500}
      height={500}
      className={styles.image}
      /> */}
      <div className={styles.waveButton}>
        <svg width="1440" height="174" viewBox="0 0 1440 174" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 87.3907L60 72.3907C120 58.3907 240 29.3907 360 43.3907C480 58.3907 600 115.391 720 108.391C840 101.391 960 29.3907 1080 7.39071C1200 -13.6093 1320 15.3907 1380 29.3907L1440 43.3907V173.391H1380C1320 173.391 1200 173.391 1080 173.391C960 173.391 840 173.391 720 173.391C600 173.391 480 173.391 360 173.391C240 173.391 120 173.391 60 173.391H0V87.3907Z" fill="white" />
        </svg>
      </div>
    </div>
  )

}
export default Banner
