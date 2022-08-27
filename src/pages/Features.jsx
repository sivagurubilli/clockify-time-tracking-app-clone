import { Center } from "@chakra-ui/react";
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
import j from "./featuresimage/Screenshot (41).png";
import Footer from "../components/Footer/Footer";


const Featurespage = ()=>{
    
    return(
        <div>
            <div className="Upper">
                <img style={{padding:"10px"}} src={a} alt="" />
                <img style={{padding:"10px"}} src={b} alt="" />
                <img style={{padding:"10px"}} src={c} alt="" />
                <img style={{padding:"10px"}} src={d} alt="" />
                <h1 style={{textAlign:"center",fontWeight:"bolder",fontSize:30}}>Calendar</h1>
                <h1 style={{textAlign:"center", fontSize:30,color:"grey"}}>Visualize your time and block out activities.</h1>
                <img style={{padding:"10px"}} src={e} alt="" />
                <img style={{padding:"10px"}} src={f} alt="" />
                <img style={{padding:"10px"}} src={g} alt="" />
                <img style={{padding:"10px"}} src={h} alt="" />
                <img style={{padding:"10px"}} src={i} alt="" />
                <Footer/>
            </div>
        </div>
    )
}

export default Featurespage;