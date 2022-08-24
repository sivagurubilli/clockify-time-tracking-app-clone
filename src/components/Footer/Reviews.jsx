import React from 'react';
import styled from "styled-components";
import style from "./Reviews.module.css";

const Reviews = () => {
  return (
    <Div>
      <Span >#1 RATED SOFTWARE</Span>
      <h2 style={{fontSize: "32px",  margin: "10px auto 10px"}}>Join millions of happy users</h2>
      <P>Clockify is the best rated time tracking software with 4,000+ reviews.</P>

      <Divv>
        <div>
            <p className={style.title}>Great experience</p>
            <p className={style.star}>★★★★★</p>
            <p className={style.text}>It has really helped me become more organized</p>
            <p className={style.author}>-lauren Leonard, Illustrator</p>
        </div>

        <div>
            <p className={style.title}>Game-changer for remote work</p>
            <p className={style.star}>★★★★★</p>
            <p className={style.text}>I can track on my phone - a few taps and I'm ready to get onto my work.</p>
            <p className={style.author}>Kem MacKay, Coordinator</p>
        </div>
        <div>
            <p className={style.title}>Grows with you!</p>
            <p className={style.star}>★★★★★</p>
            <p className={style.text}>I love how Clockify allows my contractors to independently log billable hours.</p>
            <p className={style.author}>-Cameron Suorsa, Entrepreneur</p>
        </div>
        <div>
            <p className={style.title}>Fantastic</p>
            <p className={style.star}>★★★★★</p>
            <p className={style.text}>Makes it incredibly easy to record time and attach pdf reports to invoices.</p>
            <p className={style.author}>-David Jackson, Consultant</p>
        </div>
        <div>
        <p className={style.title}>Great experience</p>
            <p className={style.star}>★★★★★</p>
            <p className={style.text}>It has really helped me become more organized</p>
            <p className={style.author}>-lauren Leonard, Illustrator</p>
        </div>
        <div>
            <p className={style.title}>Clocify is scary good!</p>
            <p className={style.star}>★★★★★</p>
            <p className={style.text}>It is powerful and often frightening insight into your own behavior.</p>
            <p className={style.author}>-Skyler Bird, Web Designer</p>
        </div>
        <div>
        <p className={style.title}>Works great for startups</p>
            <p className={style.star}>★★★★★</p>
            <p className={style.text}>We grew from a couple people to almost 80 and it worked perfectly the whole time!</p>
            <p className={style.author}>-Zachary Gaskill, Sales Manager</p>
        </div>
        <div>
        <p className={style.title}>Great experience</p>
            <p className={style.star}>★★★★★</p>
            <p className={style.text}>It has really helped me become more organized</p>
            <p className={style.author}>-lauren Leonard, Illustrator</p>
        </div>
        <div>
        <p className={style.title}>Works great for startups</p>
            <p className={style.star}>★★★★★</p>
            <p className={style.text}>We grew from a couple people to almost 80 and it worked perfectly the whole time!</p>
            <p className={style.author}>-Zachary Gaskill, Sales Manager</p>
        </div>
        <div>
        <p className={style.title}>Game-changer for remote work</p>
            <p className={style.star}>★★★★★</p>
            <p className={style.text}>I can track on my phone - a few taps and I'm ready to get onto my work.</p>
            <p className={style.author}>Kem MacKay, Coordinator</p>
        </div>
        <div>
            <p className={style.title}>Works great for startups</p>
            <p className={style.star}>★★★★★</p>
            <p className={style.text}>We grew from a couple people to almost 80 and it worked perfectly the whole time!</p>
            <p className={style.author}>-Zachary Gaskill, Sales Manager</p>
        </div>
        <div>
        <p className={style.title}>Grows with you!</p>
            <p className={style.star}>★★★★★</p>
            <p className={style.text}>I love how Clockify allows my contractors to independently log billable hours.</p>
            <p className={style.author}>-Cameron Suorsa, Entrepreneur</p>
        </div>
        <div>
        <p className={style.title}>Fantastic</p>
            <p className={style.star}>★★★★★</p>
            <p className={style.text}>Makes it incredibly easy to record time and attach pdf reports to invoices.</p>
            <p className={style.author}>-David Jackson, Consultant</p>
        </div>
        <div>
        <p className={style.title}>Great experience</p>
            <p className={style.star}>★★★★★</p>
            <p className={style.text}>It has really helped me become more organized</p>
            <p className={style.author}>-lauren Leonard, Illustrator</p>
        </div>
        <div>
        <p className={style.title}>Clocify is scary good!</p>
            <p className={style.star}>★★★★★</p>
            <p className={style.text}>It is powerful and often frightening insight into your own behavior.</p>
            <p className={style.author}>-Skyler Bird, Web Designer</p>
        </div>
      </Divv>
    </Div>
  )
}

export default Reviews

const Div = styled.div`
    border: 2px solid blue;
    margin-bottom: 100px;
    margin-top: 100px;
    justify-items: center;
    /* height: 400px; */
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1;
    text-align: center;
    padding-bottom: 70px;
   `;

const Span = styled.span`
color: #78909C;
font-size: 12px;
display: block;
margin: 10px auto 10px;
text-align: center; 
`;

const P = styled.p`
margin-right: auto;
margin-left: auto;
margin-bottom: 20px;
/* max-width: 600px; */
text-align: center;
font-size: 1.315rem;
line-height: 2rem;
color: #5A6B7B;
overflow-wrap: break-word;
`;

const Divv = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 1;
    grid-gap: 30px;

    div{
        box-shadow: 0 2px 6px 0 rgb(1 87 155 / 20%);
        /* border: 2px solid black; */
        /* height: 180px; */

        transition: all 0.1s ease-in;
    display: inline-block;
    border-radius: 3px;
    margin: 10px 10px;
    min-width: 280px;
    /* max-width: 240px; */
    padding: 15px;
    }

    p{
        overflow-wrap: break-word;
        display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 1rem;
    }
`;

