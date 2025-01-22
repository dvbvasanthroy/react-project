import React from 'react'
import styles from './project_2.module.css'
import { NavLink } from 'react-router-dom'
import { FiList } from "react-icons/fi";
import { IoExitOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { GrTag } from "react-icons/gr";
const NavBar = () => {
  return (
    <>
      <div className={styles.nav}>
        <article className={styles.left}>Logo</article>
        <article className={styles.right}>
          <NavLink to="/" className={styles.navLink}>Products<FiList /></NavLink>
          <NavLink to="/cart" className={styles.navLink}>Cart<FiShoppingCart /></NavLink>
          <NavLink to="/order" className={styles.navLink}>Order<GrTag /></NavLink>
          <NavLink to="/checkout" className={styles.navLink}>Checkout<IoExitOutline /></NavLink>
        </article>
      </div>
    </>
  )
}

export default NavBar