import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import ResetPassword from "./ResetPassword";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isOtpSend, setIsOtpSend] = useState(false);
  console.log(email);

  const handleOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/forgotPassword",
        { email }
      );
      console.log(response);
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
          <ResetPassword email={email}></ResetPassword>
        ) : (
          <div className="password-page-background">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="password-box">
                <div className="form-content m-5">
                  <h3>Forgot Password</h3>
                  <h4>
                    Enter your account email address. We'll send a confirmation
                    email.
                    <br />
                    reset your password.
                  </h4>

                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <form onSubmit={handleOTP}>
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
                      <button
                        type="submit"
                        className="common-btn text-nowrap fs-5 text-center"
                      >
                        Get OTP{" "}
                      </button>
                    </form>
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
        )}
      </div>
    </>
  );
};

export default ForgotPassword;
