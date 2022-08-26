import React from 'react'
import style from "./TrackinApp.module.css";
import styled from "styled-components";

export const TrackingApp = () => {
  return (
    <div className={style.div}>
        <h2 className={style.header}>Time tracking apps</h2>
        <p className={style.text}>Clockify works across devices. Track time from anywhere — all data is synced online.</p>

        <div className={style.div2}>
            <div>
                <img src="https://clockify.me/assets/images/time-tracking-app-desktop.png" alt="" />
                <H4>DESKTOP APP</H4>
                <Button>Windows</Button>
                <Button>Mac</Button>
                <Button>Linux</Button>
            </div>
            <div>
                <img src="https://clockify.me/assets/images/time-tracking-app-web.png" alt="" />
                <H4>WEB APP</H4>
                <Button>Edge</Button>
                <Button>Chrome</Button>
                <Button>Firefox</Button>
            </div>
            <div>
                 <img src="https://clockify.me/assets/images/time-tracking-app-mobile.png" alt="" />
                 <H4>MOBILE APP</H4>
                 <Button>Android</Button>
                <Button>iOS</Button>
            </div>
            <div>
                 <img src="https://clockify.me/assets/images/time-tracking-app-kiosk.png" alt="" />
                 <H4>KIOSK APP</H4>
                 <Button>Any device</Button>
            </div>
        </div>

        
    </div>
  )
}

const Button = styled.button`
    /* display: block; */
    margin: 20px auto 10px;
    border-radius: 3px;
    width: 120px;
    height: 2.3rem;
    color: #03A9F4;
    border: 1px solid #03A9F4;
    text-shadow: none;
    margin-right: 8px;
    
    :hover{
        background-color: #03A9F4;
        color: #fff;
    }
`

const H4 = styled.h4`
   font-size: 14px;
   font-weight: bold;
   margin-top: 14px;
`
