import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "@mui/material";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SignUp = () => {
  // const location = useLocation();
  // console.log(location.search);
  // const myParams = new URLSearchParams(location.search).get("email");
  // console.log(myParams);
  //   const navigate = useNavigate();
  //   navigate("/signin?email");

  return (
    <>
      <div>
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
                <div className="input-group">
                  <FontAwesomeIcon
                    className="symbols"
                    icon={faUser}
                  ></FontAwesomeIcon>
                  <input type="name" required className="third-party-btn " />
                  <label for="name">Name</label>
                </div>
                <div className="input-group">
                  <FontAwesomeIcon
                    className="symbols"
                    icon={faEnvelope}
                  ></FontAwesomeIcon>
                  <input type="email" required className="third-party-btn" />
                  <label for="email">Email Address</label>
                </div>
                <div className="input-group">
                  <FontAwesomeIcon
                    className="symbols"
                    icon={faLock}
                  ></FontAwesomeIcon>
                  <input type="password" required className="third-party-btn" />
                  <label for="password">Password</label>
                </div>
                <div className="input-group">
                  <FontAwesomeIcon
                    className="symbols"
                    icon={faLock}
                  ></FontAwesomeIcon>
                  <input type="password" required className="third-party-btn" />
                  <label for="password"> Confirm Password</label>
                </div>
                <div className="d-flex gap-2">
                  <input type="checkbox" name="check" className="mb-3" />
                  <p>Keep singed in to stay connected</p>
                </div>
                <button className="common-btn">Sign Up </button>

                <p className="text-center">
                  {" "}
                  Already have an account?{" "}
                  <Link href="/signin?email">Sign In</Link>
                </p>
                <hr />
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
      </div>
    </>
  );
};

export default SignUp;
