import React from 'react'
import Navbar from '../Navbar'
import { TopSection } from '../TopSection';
import style from "./Timer.module.css";
import {Link} from "react-router-dom";
import Footer from '../../Footer/Footer';

export const Timesheet = () => {
  return (
    <div>
        <Navbar />
        <TopSection head={'The most popular free'} head2={'timesheet app'} head3={'for employees'} para={'Clockify is the most popular clock timer app for tracking the amount of time you spend on projects, tasks, and various activities.'} />

        <div className={style.div}>
            
            <h2 className={style.h2}>A modern employee timesheet app</h2>
            <p className={style.p1}>
                Clockify is a digital employee timesheet app that works in a browser. Clockify streamlines timesheet collection and time analysis so you no longer have to fill out, scan, and store paper time sheets.
                <br /> <br />
                By using Clockify, traditional timekeeping systems such as physical timesheets and time cards, Excel spreadsheets, or rule-of-thumb estimates become obsolete.
                <br /><br />
                Regulated overtime payments can be one of the heftiest bottom-line business expenses. Clockify makes it extremely easy for you to exactly know how many hours each employee has worked.
                <br /><br />
                With Clockify, monthly and hourly employees can enter hours spent on specific projects/tasks throughout the week, and revise them when needed so your reporting data is consistent.
                <br /><br />
                Clockify can also calculate payroll and calculate billable hours automatically, based on your employees' hourly rates.
            </p>
            
          <br />
          <h2 className={style.h2} style={{textAlign: 'center'}}>Employees fill their weekly timesheet</h2>

            <img src="https://clockify.me/assets/images/features/timesheet-screenshot.svg" alt="" />
            <hr />
            <h2 className={style.h2} style={{textAlign: 'center'}}>Run reports and export data</h2>

            <img src="https://clockify.me/assets/images/features/reports-screenshot.svg" alt="" />
        </div>

        <div className={style.div2}>
            <h2 className={style.h2}>How to fill out online timesheet data</h2>
            <div className={style.video}>
            <iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/NMZhFs_b0Aw?rel=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fclockify.me" frameborder="0" allow="encrypted-media" allowfullscreen="" data-gtm-yt-inspected-8257809_179="true" id="760302160" title="Clockify Tour"></iframe>
            </div>
        </div>
       

        <Footer />
    </div>
  )
}
