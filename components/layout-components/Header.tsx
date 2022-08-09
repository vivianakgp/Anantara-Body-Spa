import Image from 'next/image'
import Link from 'next/link'

import styles from '../../styles/components/layout-components/Header.module.css'
const Header = () => {
    return (
        <header className={styles.header}>
            <Image
                src="/logotipo.png"
                alt="Logo"
                width={150}
                height={50}
            />
            <i id="burgerIcon" className='fa-solid fa-bars'></i>

            <svg className={styles.waveUp} width="1440" height="174" viewBox="0 0 1440 174" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 87.3907L60 72.3907C120 58.3907 240 29.3907 360 43.3907C480 58.3907 600 115.391 720 108.391C840 101.391 960 29.3907 1080 7.39071C1200 -13.6093 1320 15.3907 1380 29.3907L1440 43.3907V173.391H1380C1320 173.391 1200 173.391 1080 173.391C960 173.391 840 173.391 720 173.391C600 173.391 480 173.391 360 173.391C240 173.391 120 173.391 60 173.391H0V87.3907Z" fill="white" />
            </svg>

            <nav className={styles.nav}>
                <Link href={''}>
                    <a>Nosotros</a>
                </Link>
                <Link href={''}>
                    <a>Tratamientos</a>
                </Link>
                <Link href={''}>
                    <a>Nuestros Clientes</a>
                </Link>
            </nav>
        </header>
    )
}

export default Header