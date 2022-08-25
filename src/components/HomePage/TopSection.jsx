import React from "react";
import style from "./TopSection.module.css";

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
            <button className={style.btn}>
              Start tracking time — It's Free!
            </button>
          </a>
        </div>
      </div>

    
        <div className={style.div2}>
            <img style={{ margin: "auto", display: "inline", paddingRight: "10px" }} src="https://clockify.me/assets/images/signed-up-icon.svg" alt="" />
            <span className={style.num}>136,171 people signed up last month</span>
        </div>
      
    </div>
  );
};
