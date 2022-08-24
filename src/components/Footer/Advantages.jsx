import React from 'react';
import styled from "styled-components";

const Advantages = () => {
  return (
    <Div>
      <div style={{marginRight: "100px"}}>
        <Img src="https://clockify.me/assets/images/free-forever-clock-4.svg" alt="" />
      </div>
      <Divv>
        <h1>FREE</h1> <br /> <br />
        <h2>FOREVER!</h2>
        <br /> <br />
        <p>
           <span>✓</span> Unlimited users</p>
        <p>
        <span>✓</span>  Unlimited tracking</p>
        <p> <span>✓</span> Unlimited projects</p>
        
        <p style={{color: "#03a9f4", fontSize: "16px"}}>Upgrade {"->"}  </p>
      </Divv>
    </Div>
  )
}

export default Advantages

const Div = styled.div`
    border: 2px solid green;
    margin-bottom: 100px;
    margin-top: 100px;
    display: flex;
    padding: 120px 200px;
    justify-items: center;
    background-color: #f7fcff;
   `;

const Img = styled.img`
    height: 500px;
`;

const Divv = styled.div`
    padding: 60px;
    padding-top: 130px;

    p{
        font-size: 18px;
    line-height: 32px;
    padding-right: 40px;
    color: #5A6B7B;
    font-family: 'Roboto', sans-serif;
    }

    h1{
        font-size: 72px;
    line-height: 0.3;
    color: #03A9F4;
    font-weight: bold;
    }

    h2{
        font-size: 60px;
    line-height: 0.3;
    color: #03A9F4;
    font-weight: bold;
    }

    p:last-child:hover{
        text-decoration: underline;
        cursor: pointer;
    } 
` 

