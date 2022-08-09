import Image from 'next/image'
import style  from '../styles/components/Banner.module.css'
const Banner = ({ bannerPath }) => {
  return (
    <div className={style.banner}>
      <Image 
      src={ bannerPath }
      alt='bannerImg'
      width={500}
      height={500}
      />
    </div>
  )
}

export default Banner
