// import styles from '../styles/components/Layout.module.css'
import React from 'react'

const Layout = ({ children }): JSX.Element => {
  return (
    <>
      <div>menu</div>
      <main>
        {children}
      </main>
      <div>footer</div>
    </>
  )
}

export default Layout
