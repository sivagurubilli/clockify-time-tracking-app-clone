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
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
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
          style={{ fontSize: "17px", textAlign: "center", marginTop: "-10px" }}
        >
          Create a free account to start tracking time and supercharge your
          productivity.
        </p>
        <p style={{ textAlign: "center", fontSize: "11px" }}>
          No credit card required · Unsubscribe at any time
        </p>
      </div>

      <form>
        <div
          style={{
            height: "390px",
            width: "335px",
            marginTop: "-60px",
            margin: "auto",
            padding: "20px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          <h3>Sign up</h3>
          <Input
            style={{ height: "40px", width: "300px", marginLeft: "10px" }}
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
            style={{ marginTop: "22px", marginLeft: "10px" }}
          />
          <span>I agree to the Terms of Use</span>
          <button
            style={{
              height: "40px",
              width: "300px",
              marginTop: "20px",
              marginLeft: "14px",
            }}
          >
            Create Free Account
          </button>
        </div>
      </form>
    </Flex>
  );
}
