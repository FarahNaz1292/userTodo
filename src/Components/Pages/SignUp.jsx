import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io";
import { Link } from "react-router-dom";
import Verification from "../SharedPages/Verification";

const SignUp = () => {
  // const location = useLocation();
  // console.log(location.search);
  // const myParams = new URLSearchParams(location.search).get("email");
  // console.log(myParams);
  //   const navigate = useNavigate();
  //   navigate("/signin?email");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOtpSend, setIsOtpSend] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name: name,
        email,
        password,
      };
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/signup",
        data
      );
      if (response?.data?.isOtpSend) {
        setIsOtpSend(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        {isOtpSend ? (
          <Verification email={email}></Verification>
        ) : (
          <div className="page-background">
            <div className="d-flex align-items-center justify-content-center">
              <div className="form-box">
                <div className="form-content m-5">
                  <h3>Create New Account</h3>
                  <h4>To stay connected with us, please sign up. </h4>
                  <button className="third-party-btn">
                    <FcGoogle size={25} /> Continue with Google
                  </button>
                  <button className="third-party-btn">
                    <IoLogoApple size={25} /> Continue with Apple
                  </button>
                  <Divider className="divider-text">Or Sign Up With</Divider>
                  <form onSubmit={handleSubmit}>
                    <div className="input-group">
                      <FontAwesomeIcon
                        className="symbols"
                        icon={faUser}
                      ></FontAwesomeIcon>
                      <input
                        type="name"
                        required
                        className="third-party-btn "
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-group">
                      <FontAwesomeIcon
                        className="symbols"
                        icon={faEnvelope}
                      ></FontAwesomeIcon>
                      <input
                        type="email"
                        required
                        className="third-party-btn"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="email">Email Address</label>
                    </div>
                    <div className="input-group">
                      <FontAwesomeIcon
                        className="symbols"
                        icon={faLock}
                      ></FontAwesomeIcon>
                      <input
                        type="password"
                        required
                        className="third-party-btn"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label htmlFor="password">Password</label>
                    </div>

                    <div className="d-flex gap-2">
                      <input type="checkbox" name="check" className="mb-3" />
                      <p>Keep singed in to stay connected</p>
                    </div>
                    <button className="common-btn">Sign Up </button>
                  </form>

                  <p className="text-center">
                    {" "}
                    Already have an account? <Link to="/signin">Sign In</Link>
                  </p>
                </div>
              </div>
            </div>
            <p className="terms-text">
              By Clicking "Sign In", you agree to our{" "}
              <Link href="">
                "Terms of <br /> Use and Privacy Policy"
              </Link>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default SignUp;
