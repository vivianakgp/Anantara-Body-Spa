import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';

import styles from '../../styles/components/layout-components/Header.module.css'
const Header = () => {
    const [menuBackground, setMenuBackground] = useState('transparent')
    const [menuShadow, setmenuShadow] = useState('none')



    useEffect(() => {
        const showAndHiddenMenu = () => {
            const SCROLL_TOP = window.pageYOffset
            if (SCROLL_TOP === 0) {
                setMenuBackground('transparent')
                setmenuShadow('none')

            } else {
                setMenuBackground('#ffffff')
                setmenuShadow('rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px')
            }
        };
        window.addEventListener("scroll", showAndHiddenMenu);
    }, [])

    return (
        <header className={styles.header} style={{ backgroundColor: menuBackground, boxShadow: menuShadow }}>
            <Image
                src="/isotipo.png"
                alt="Logo"
                width={50}
                height={50}
            />
            <i id="burgerIcon" className='fa-solid fa-bars'></i>
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
