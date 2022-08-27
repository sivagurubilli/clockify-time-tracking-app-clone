import React from 'react'
import Navbar from '../Navbar'
import { TopSection } from '../TopSection';
import style from "./Timer.module.css";
import {Link} from "react-router-dom";
import Footer from '../../Footer/Footer';

export const Timer = () => {
  return (
    <div>
        <Navbar />
        <TopSection head={'Free Timer App'} para={'Clockify is the most popular clock timer app for tracking the amount of time you spend on projects, tasks, and various activities.'} />

        <div className={style.div}>
            
            <h2 className={style.h2}>Clock timer app — What is it?</h2>
            <p className={style.p1}>Timer clock apps help you improve your productivity and time management throughout the day by:</p>
            <ul className={style.p1} style={{paddingLeft: "50px"}}>
                <li>Keeping track of your hourly progress</li>
                <li>Reminding you when your breaks are over</li>
                <li>Tracking your activity</li>
                <li>Categorizing your tasks by chronological order</li>
            </ul>
            <p className={style.p1} style={{width: '78%'}}>No matter who you are and what you do, you'll benefit from having an online tool to help you achieve your goals in a workweek.</p>
          <br />
            <img src="https://clockify.me/assets/images/features-apps-800w.png" alt="" />
        </div>

        <div className={style.div2}>
            <h2 className={style.h2}>How does the Clockify timer app work?</h2>
            <p className={style.p1}>Tracking time with Clockify is incredibly easy and intuitive — log in, start the timer, and let the app do its job. Still, let's go over the steps to see the exact method you'll be using with Clockify.</p>

            <div className={style.video}>
            <iframe className={style.frame} width="800" height="450" src="https://www.youtube-nocookie.com/embed/BVOXETKDIUk?rel=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fclockify.me" frameborder="0" allow="encrypted-media" allowfullscreen="" data-gtm-yt-inspected-8257809_179="true" id="100803451" title="Getting Started: How to Track Time with Clockify"></iframe>
            </div>
        </div>

        <Footer />
    </div>
  )
}
