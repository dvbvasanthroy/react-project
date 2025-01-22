import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './crud.module.css'
import { IoHome } from "react-icons/io5";

const NavBarForCrud = () => {
  return (
    <div className={styles.nav}>
        <article className={styles.left}><IoHome /></article>
        <article className={styles.right}>
            <NavLink to="/">Create</NavLink>
            <NavLink to="/data">Data</NavLink>
            <NavLink to="/view">View</NavLink>
            <NavLink to="/update">Update</NavLink>
        </article>
    </div>
  )
}

export default NavBarForCrud