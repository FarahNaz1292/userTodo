import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <div className="password-page-background">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="password-box">
            <div className="form-content m-5">
              <h3>Forgot Password</h3>
              <h4>
                Enter your account email address. We'll send a confirmation
                email to <br />
                reset your password.
              </h4>

              <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="input-group">
                  <FontAwesomeIcon
                    className="symbols"
                    icon={faEnvelope}
                  ></FontAwesomeIcon>
                  <input type="email" required className="third-party-btn" />
                  <label htmlFor="email">Email Address</label>
                </div>
                <button className="common-btn text-nowrap fs-5 text-center">
                  Get OTP{" "}
                </button>
              </div>
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
    </>
  );
};

export default ForgotPassword;
