import React from 'react';
import Navbar from "./Navbar"
import style from "./DesktopWin.module.css"
import Footer from '../Footer/Footer';
export const DesktopWin = () => {
  return (
    <div>
        <Navbar />

        <div className={style.div}>
        <h2 className={style.header}>Free Windows time tracker</h2>
        <p className={style.text}>Clockify is the only 100% free time tracking app for Windows that lets you and your team log hours straight from your desktop while working.</p>
        <a rel="nofollow" href="https://clockify.me/downloads/clockify-setup.msi">
        <img className={style.img} src="https://clockify.me/assets/images/download-windows.svg" alt="" />
        </a>

        <img className={style.img} height='600px' src="https://clockify.me/assets/images/windows-time-tracker-2-light.png" alt="" />
        </div>

        <Footer />
    </div>
  )
}
