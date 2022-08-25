import React from "react";
import style from "./TopSection.module.css";
import {Link} from "react-router-dom";

export const TopSection = () => {
    
  return (
    <div className={style.div}>
      <h1 className={style.header}>
        {" "}
        The most popular free{" "}
        <span style={{ color: "#03A9F4" }}> time tracker for teams </span>{" "}
      </h1>
      <p className={style.text}>
        Time tracking software used by millions. Clockify is a time tracker and
        timesheet app that lets you track work hours across projects. Unlimited
        users, free forever.
      </p>

      <div className={style.stars}>
        <img
          style={{ margin: "auto", display: "inline", paddingRight: "10px" }}
          src="https://clockify.me/assets/images/stars-small.svg"
          alt=""
        />
        <span>4,000+ Reviews</span>
        <div>
          <a href="https://app.clockify.me/signup">
            <Link to={"/timetrackermain"}>
            <button className={style.btn}>
              Start tracking time — It's Free!
            </button>
            </Link>
          </a>
        </div>
      </div>

      <div className={style.div2}>
        <img
          style={{ margin: "auto", display: "inline", paddingRight: "10px" }}
          src="https://clockify.me/assets/images/signed-up-icon.svg"
          alt=""
        />
        <span className={style.num}>136,171 people signed up last month</span>
      </div>

      <div className={style.logos}>
      <img style={{ margin: "auto", display: "inline", paddingRight: "10px" }}
          src="https://clockify.me/assets/images/customers-light-gray-3.svg" alt="" />
      </div>

      {/* ****************Video**************** */}
      <div className={style.heroVideo}>
        <img className={style.heroImage} src="https://clockify.me/assets/images/time-tracker-screenshot.svg" alt="" />
        <a href='https://www.youtube.com/watch?v=NMZhFs_b0Aw' target={'_blank'}>
        <div className={style.playButton}>
            <img className={style.playBtn} src="https://clockify.me/assets/images/play-button.svg" alt="" />
            <p className={style.heroBtnText}> Watch demo (12:35) </p>
        </div>
        </a>
      </div>

      <div className={style.demoVideo}>
        <div className={style.iframeCont}></div>
        <img className={style.closeBtn} src="https://clockify.me/assets/images/close-button.svg" alt="" />
      </div>
    </div>
  );
};
