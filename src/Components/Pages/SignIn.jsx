import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/signin",
        { email, password }
      );
    } catch (error) {
      alert("Please try again");
      console.log(error);
    }
  };


  return (
    <>
      <div>
        <div className="page-background">
          <div className="d-flex align-items-center justify-content-center">
            <div className="form-box">
              <div className="form-content m-5">
                <h3>SignIn</h3>
                <h4>To stay connected with us, please sign in. </h4>
                <button className="third-party-btn">
                  <FcGoogle size={25} /> Continue with Google
                </button>
                <button className="third-party-btn">
                  <IoLogoApple size={25} /> Continue with Apple
                </button>
                <Divider className="divider-text">Or Sign In With</Divider>
                <div className="input-group">
                  <FontAwesomeIcon
                    className="symbols"
                    icon={faEnvelope}
                  ></FontAwesomeIcon>
                  <input type="email" required className="third-party-btn " />
                  <label htmlFor="email">Email Address</label>
                </div>
                <div className="input-group">
                  <FontAwesomeIcon
                    className="symbols"
                    icon={faLock}
                  ></FontAwesomeIcon>
                  <input type="password" required className="third-party-btn" />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="d-flex gap-2">
                  <input type="checkbox" name="check" className="mb-3" />
                  <p>Keep singed in to stay connected</p>
                </div>
                <button className="common-btn" onClick={handleSubmit}>
                  Sign in{" "}
                </button>
                <p className="text-center">
                  {" "}
                  Don't have an account? <a href="./">Sign Up</a>
                </p>
                <hr />
                <a href="./forgotPassword" className="text-center">
                  Forgot Password
                </a>
              </div>
            </div>
          </div>
          <p className="terms-text">
            By Clicking "Sign In", you agree to our{" "}
            <a href="">
              "Terms of <br /> Use and Privacy Policy"
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
