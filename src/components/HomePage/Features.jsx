import React from 'react';
import style from "./Features.module.css";

export const Features = () => {
  return (
    <div className={style.maindiv}>
    <div className={style.div}>
        <h2 className={style.header}>Time Management Features</h2>
        <p className={style.text}>Track productivity, attendance, and billable hours with a simple time tracker and timesheet.</p>
        {/* *********Section-1************** */}
        <div className={style.div2}>
            <div className={style.inner1}>
                <h3 className={style.heading}>TIMEKEEPING</h3>
                <div>
                    <h4>Timer</h4>
                    <p>Track work hours in real time.</p>
                </div>
                <div>
                    <h4>Timesheet</h4>
                    <p>Enter time in a weekly timesheet.</p>
                </div>
                <div>
                    <h4>Calender</h4>
                    <p>Visually block out and manage time.</p>
                </div>
                <div>
                    <h4>Auto tracker</h4>
                    <p>Track apps and websites you use.</p>
                </div>
                <div>
                    <h4>Kiosk</h4>
                    <p>Clock in from a shared device.</p>
                </div>
            </div>
            <div>
                <img src="https://clockify.me/assets/images/feature-time-tracker-methods.svg" alt="" />
            </div>
        </div>

        {/* *********Section-2************** */}
        <div className={style.division2}>
            
            <div>
                <img src="https://clockify.me/assets/images/feature-time-reporting-activity.svg" alt="" />
            </div>

            <div className={style.inner1}>
                <h3 className={style.heading}>REPORTING</h3>
                <div>
                    <h4>Reports</h4>
                    <p>Analyze and export tracked time.</p>
                </div>
                <div>
                    <h4>Activity</h4>
                    <p>See who works on that.</p>
                </div>
                <div>
                    <h4>Rates</h4>
                    <p>See earnings, cost, and profit.</p>
                </div>
                <div>
                    <h4>Progress</h4>
                    <p>Track project estimates and budget.</p>
                </div>
                <div>
                    <h4>Location</h4>
                    <p>See visited sites and routes.</p>
                </div>
            </div>
        </div>

        {/* *********Section-3************** */}
        <div className={style.div2}>
            <div className={style.inner1}>
                <h3 className={style.heading}>MANAGEMENT</h3>
                <div>
                    <h4>Scheduling</h4>
                    <p>Schedule work, assignments, and shifts.</p>
                </div>
                <div>
                    <h4>Time off</h4>
                    <p>Manage leaves and holidays.</p>
                </div>
                <div>
                    <h4>Approval</h4>
                    <p>Submit and approve timesheets.</p>
                </div>
                <div>
                    <h4>Invoicing</h4>
                    <p>Create invoices from billable time.</p>
                </div>
                <div>
                    <h4>Expenses</h4>
                    <p>Record project expenses and fees.</p>
                </div>
            </div>

            <div>
                <img src="https://clockify.me/assets/images/feature-team-scheduling.svg" alt="" />
            </div>
        </div>

    </div>
  </div>
  )
}
