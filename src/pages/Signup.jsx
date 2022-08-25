import {
  Flex,
  Box,
  FormControl,
  useToast,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <>
    <div>
        <div style={{ display: "flex" }}>
        <img
          alt="img"
          src="https://app.clockify.me/assets/logo.svg"
          style={{ margin: "40px" }}
        />
        <h4 style={{ marginLeft: "75%", marginTop: "40px", color: "blue" }}>
          Log In
        </h4>
      </div>

      <div style={{ height: "200px", width: "600px", marginLeft: "400px" }}>
        <h2
          style={{
            fontSize: "32px",
            fontFamily: "sansSarif",
            textAlign: "center",
          }}
        >
          Get started with Clockify
        </h2>
        <p
          style={{ fontSize: "17px", textAlign: "center", marginTop: "7px" }}
        >
          Create a free account to start tracking time and supercharge your
          productivity.
        </p>
        <p style={{ textAlign: "center", fontSize: "11px" ,marginTop: "7px" }}>
          No credit card required · Unsubscribe at any time
        </p>
      </div>

      <form>
        <div
          style={{
            height: "390px",
            width: "370px",
            marginTop: "-60px",
            marginLeft: "500px",
              margin: "auto",
            padding: "20px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          <h1 style={{fontSize:"20px",marginLeft:"13px",fontWeight:"500"}}>Sign up</h1>
          <Input
            style={{ height: "40px", width: "300px", marginLeft: "10px",marginTop:"20px" }}
            type="email"
            placeholder=" Enter Email"
            name="email"
          />

          <Input
            style={{
              height: "40px",
              width: "300px",
              marginTop: "20px",
              marginLeft: "10px",
            }}
            type="password"
            placeholder=" Choose Password"
            name="password"
          />

          <input
            type="checkbox"
            style={{ marginTop: "22px", marginLeft: "15px" }}
          />
          <span>       I agree to the<span style={{color:"blue"}}>     Terms of Use</span></span>
          <Button style={{marginTop:"20px",padding:"25px",paddingRight:"90px",paddingLeft:"70px",textAlign:"center",marginLeft:'8px'}}>Create Free Account</Button>
          <div style={{display:"flex",height:"30px",width:"100%",marginTop:"10px"}}>

          <div style={{display:"flex",height:"1px",width:"40%",border:"0.1px solid grey",marginTop:"10px",marginLeft:"10px"}} >
          </div>
          <h2 style={{marginLeft:"10px"}}>OR</h2>
          
          <div style={{display:"flex",height:"1px",width:"42%",border:"0.1px solid grey",marginTop:"10px",marginLeft:"10px"}}>
          </div>
          
          </div>
          <div style={{display:"flex",height:"40px",padding:"8px",width:"93%",marginTop:"10px",border :"1px solid grey",marginLeft:"10px"}}>
          <img src="https://app.clockify.me/assets/ui-icons/icon-google.svg" alt="google" />
          <h1 style={{marginLeft:"50px"}}>Continue With Google</h1>
          
          </div>
          
        </div>
      </form>
      </div>
      </>
  
  );
}
