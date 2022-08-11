import Image from 'next/image'
import styles from '../../styles/components/layout-components/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Image 
        src="/isotipo.png" 
        alt="isotipo"
        width={100}
        height={100}
        className={styles.isotipo}
      />
        <div className={styles.contact}>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <ul>
                <li>Av.Lapislázuli #2529 Local 6 #44580 Guadalajara, Jalisco.</li>
                <li>Lunes-Viernes: 9am - 6pm <br/>Sabados: 9am - 3pm</li>
                <li>Tel: 33 2615 4992</li>
                <li>anantara.bodyspa@gmail.com</li>
            </ul>
        </div>
    </div>
  )
}
export default Footer
