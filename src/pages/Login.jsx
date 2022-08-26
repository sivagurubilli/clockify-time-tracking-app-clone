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
  border,
  color,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div style={{ display: "flex", height: "80%", width: "100%" }}>
        <div style={{ height: "900px", width: "150%" }}>
          <div style={{ display: "flex" }}>
            <img
              alt="img"
              src="https://app.clockify.me/assets/logo.svg"
              style={{ margin: "40px" }}
            />
            <h4 style={{ marginLeft: "50%", marginTop: "40px" }}>
              Don't have an account?{" "}
              <span style={{ color: "#31b9f6" }}>Sign up</span>
            </h4>
          </div>

          <form>
            <div
              style={{
                height: "390px",
                width: "300px",
                marginTop: "-70px",
                marginLeft: "500px",
                margin: "auto",
                padding: "20px",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
            >
              <h1
                style={{
                  fontSize: "20px",
                  marginLeft: "13px",
                  fontWeight: "500",
                }}
              >
                Login
              </h1>
              <Input
                style={{
                  height: "40px",
                  width: "250px",
                  marginLeft: "10px",
                  marginTop: "20px",
                }}
                type="email"
                placeholder=" Enter Email"
                name="email"
              />

              <Input
                style={{
                  height: "40px",
                  width: "250px",
                  marginTop: "20px",
                  marginLeft: "10px",
                }}
                type="password"
                placeholder=" Choose Password"
                name="password"
              />
              <div style={{ display: "flex", height: "45px", width: "90%" }}>
                <input
                  type="checkbox"
                  style={{ marginTop: "1px", marginLeft: "15px" }}
                />

                <div
                  style={{
                    height: "45px",
                    width: "100px",
                    marginLeft: "10px",
                    marginTop: "7px",
                  }}
                >
                  <h3>Stay Logged in</h3>
                </div>

                <div
                  style={{
                    height: "45px",
                    width: "90px",
                    marginTop: "8px",
                    color: "#31b9f6",
                  }}
                >
                  {" "}
                  Forgot password?
                </div>
              </div>
              <Button
                style={{
                  marginTop: "20px",
                  padding: "25px",
                  paddingRight: "102px",
                  paddingLeft: "102px",
                  textAlign: "center",
                  marginLeft: "12px",
                  color:"white",
                  backgroundColor:"#31b9f6"
                }}
              >
                Login
              </Button>
              <div
                style={{
                  display: "flex",
                  height: "30px",
                  width: "100%",
                  marginTop: "10px",
                  
                }}
              >
                <div
                  style={{
                    display: "flex",
                    height: "1px",
                    width: "40%",
                    border: "0.1px solid grey",
                    marginTop: "10px",
                    marginLeft: "10px",
                  }}
                ></div>
                <h2 style={{ marginLeft: "10px" }}>OR</h2>

                <div
                  style={{
                    display: "flex",
                    height: "1px",
                    width: "42%",
                    border: "0.1px solid grey",
                    marginTop: "10px",
                    marginLeft: "10px",
                  }}
                ></div>
              </div>
              <div
                style={{
                  display: "flex",
                  height: "40px",
                  padding: "8px",
                  width: "93%",
                  marginTop: "10px",
                  border: "1px solid grey",
                  marginLeft: "10px",
                }}
              >
                <img
                  src="https://app.clockify.me/assets/ui-icons/icon-google.svg"
                  alt="google"
                />
                <h1 style={{ marginLeft: "20px" }}>Continue With Google</h1>
              </div>
            </div>
          </form>
        </div>
        <div
          style={{
            height: "900px",
            width: "70%",
            paddingTop: "20px",
            backgroundColor: "#3c56b6",
          }}
        >
          <div
            style={{
              height: "200px",
              width: "85%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <button
              style={{
                fontSize: "14px",
                height: "25px",
                width: "50px",
                backgroundColor: "#e4eaee",
                color: "black",
              }}
            >
              NEW
            </button>
            <h1 style={{ fontSize: "32px", marginTop: "2px" }}>Scheduling</h1>
            <h2 style={{ fontSize: "20px", marginTop: "8px" }}>
              Visualize projects on a timeline and plan team's capacity (see
              who's busy and who's available).
            </h2>
            <button
              style={{
                fontSize: "15px",
                backgroundColor: "black",
                color: "white",
                marginTop: "20px",
                height: "50px",
                width: "150px",
              }}
            >
              SEE HOW IT WORKS
            </button>
          </div>
          <div
            style={{
              height: "700px",
              width: "130%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <img
              src="https://app.clockify.me/assets/features-info/scheduling-promo.webp"
              alt="tc"
              style={{
                height: "550px",
                width: "700px",
                marginLeft: "25px",
                marginTop: "100px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
