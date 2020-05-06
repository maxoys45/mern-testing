import React from 'react'

import styles from './Header.module.scss'
import { Navigation } from './Navigation'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Navigation />
      </div>      
    </header>
  )
}
