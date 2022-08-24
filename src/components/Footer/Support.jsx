import React from 'react';
import styled from "styled-components";

const Support = () => {
  return (
    <Div>
        <Span >#1 SUPPORT IN SOFTWARE</Span>
      <h2 style={{fontSize: "32px",  margin: "10px auto 10px"}}>World-class customer support</h2>
      <P>We're here 24 hours a day, every day of the week, including holidays.</P>

      <Divv>
         <Div1>
            <img src="https://clockify.me/assets/images/support-phone.svg" alt="" />
            <div>
                <Span1> 24/7 </Span1>
                <Span2> support anytime, anywhere </Span2>
            </div>
         </Div1>

         <Div1>
         <img src="	https://clockify.me/assets/images/support-mail.svg" alt="" />
            <div>
                <Span1> 1h </Span1>
                <Span2> average response time </Span2>
            </div>
         </Div1>

         <Div1>
         <img src="https://clockify.me/assets/images/support-heart.svg" alt="" />
            <div>
                <Span1> 95% </Span1>
                <Span2> satisfaction score (12k+ ratings) </Span2>
            </div>
         </Div1>

         <Div1>
         <img src="https://clockify.me/assets/images/support-uptime.svg" alt="" />
            <div>
                <Span1> 99.99% </Span1>
                <Span2> highest uptime levels </Span2>
            </div>
         </Div1>
      </Divv>
      <Button>Contact us</Button>
      <ul>
        <Li style={{display: "inline"}}>Email</Li>
        <Li style={{display: "inline"}}>Phone</Li>
        <Li style={{display: "inline"}}>Chat</Li>
      </ul>
     
    </Div>
  )
}

export default Support

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

const Divv = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 700px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 50px auto 50px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1;
`;

const Span = styled.span`
    color: #78909C;
    font-size: 12px;
    display: block;
    margin: 10px auto 10px;
    text-align: center; 
`;

const H2 = styled.h2`
padding-bottom: 10px;
    text-align: center;
    font-size: 34px;
    line-height: 1.2;
    font-weight: normal;
    color: #3D4853;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

const P = styled.p`
margin-right: auto;
    margin-left: auto;
    margin-bottom: 20px;
    max-width: 600px;
    text-align: center;
    font-size: 1.315rem;
    line-height: 2rem;
    color: #5A6B7B;
    overflow-wrap: break-word;
`;

const Div1 = styled.div`
    width: 147px;
    font-family: 'Roboto', sans-serif;

    div{
        float: right;
       line-height: 1;
    }
`;


const Li = styled.li`
    padding-right: 10px;
    color: grey;
    font-size: 14px;
`

const Span1 = styled.span`
    font-size: 28px;
    color: #3D4853;
    display: inline-block;
`;

const Span2 = styled.span`
    display: block;
    font-size: 14px;
    color: #78909C;
    max-width: 115px;
    line-height: 1.3;
`;

const Button = styled.button`
    display: block;
    margin: 20px auto 10px;
    border-radius: 3px;
    width: 170px;
    height: 2.3rem;
    color: #03A9F4;
    border: 1px solid #03A9F4;
    text-shadow: none;
    
    :hover{
        background-color: #03A9F4;
        color: #fff;
    }
`