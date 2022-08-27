import React from "react";
import a from "./featuresimage/Screenshot (32).png";
import b from "./featuresimage/Screenshot (33).png";
import c from "./featuresimage/Screenshot (34).png";
import d from "./featuresimage/Screenshot (35).png";
import e from "./featuresimage/Screenshot (36).png";
import f from "./featuresimage/Screenshot (37).png";
import g from "./featuresimage/Screenshot (38).png";
import h from "./featuresimage/Screenshot (39).png";
import i from "./featuresimage/Screenshot (40).png";
import k from "./featuresimage/Screenshot (42).png";
import Footer from "../components/Footer/Footer";
import Navbar from "./timetracker/navbar/Navbar";


const Featurespage = ()=>{
    
    return(
        <div>
            <Navbar/>
            <div style={{paddingTop:"30px"}} className="Upper">
                <img style={{padding:"10px"}} src={a} alt="" />
                <img style={{padding:"10px"}} src={b} alt="" />
                <img style={{padding:"10px"}} src={c} alt="" />
                <img style={{padding:"10px"}} src={d} alt="" />
                <h1 style={{textAlign:"center",fontWeight:"bolder",fontSize:30}}>Calendar</h1>
                <h3 style={{textAlign:"center",color:"grey"}}>Visualize your time and block out activities.</h3>
                <img style={{padding:"10px"}} src={e} alt="" />
                <h1 style={{textAlign:"center",fontWeight:"bolder",fontSize:30}}>Kiosk</h1>
                <h3 style={{textAlign:"center",color:"grey"}}>Clock in with your PIN code from a shared device.</h3>
                <img style={{padding:"10px"}} src={k} alt="" />
                <h1 style={{textAlign:"center",fontWeight:"bolder",fontSize:30}}>Apps</h1>
                <h3 style={{textAlign:"center",color:"grey"}}>Track time using desktop and mobile app.</h3>
                <img style={{padding:"10px"}} src={f} alt="" />
                <img style={{padding:"10px"}} src={g} alt="" />
                <img style={{padding:"10px"}} src={h} alt="" />
                <h1 style={{textAlign:"center",fontWeight:"bolder",fontSize:30}}>Reports</h1>
                <h3 style={{textAlign:"center",color:"grey"}}>See who worked on what, how much money you earn, review your team's time, and export the data.</h3>
                <img style={{padding:"10px"}} src={i} alt="" />
                <Footer/>
            </div>
        </div>
    )
}

export default Featurespage;