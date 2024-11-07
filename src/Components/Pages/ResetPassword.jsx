import React, { useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { todoContext } from "../../Provider/TodosProvider";

const ResetPassword = () => {
  const location = useLocation();
  const email = new URLSearchParams(location.search).get("email");

  const { navigate } = useContext(todoContext);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetPassword, setResetPassword] = useState("");
  console.log(resetPassword);

  const [otp, setOtp] = useState("");
  const handleSubmitPassword = async (e) => {
    e.preventDefault();
    if (resetPassword !== confirmPassword) {
      alert("Password does not match");
      return;
    }
    try {
      const res = await axios.patch(
        "https://staging-be-ecom.techserve4u.com/api/user/resetPassword",
        { email, otp, password: resetPassword }
      );
      if (res.data.success) {
        navigate("/signin");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    console.log(resetPassword);
  };
  return (
    <>
      <div className="page-background">
        <div className="d-flex flex-column align-items-center justify-content-center page-content">
          <div className="form-box">
            <div className="form-content m-5">
              <h3>Reset Password</h3>
              <h4>
                Setting up Password for{" "}
                <span className="fw-bold text-black fs-6">{email}</span>
              </h4>

              <div className="d-flex flex-column align-items-center justify-content-center">
                <form onSubmit={handleSubmitPassword}>
                  <div className="input-group">
                    <FontAwesomeIcon
                      className="symbols"
                      icon={faLock}
                    ></FontAwesomeIcon>
                    <input
                      type="number"
                      required
                      className="third-party-btn"
                      onChange={(e) => setOtp(e.target.value)}
                    />
                    <label htmlFor="number"> Enter OTP </label>
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
                      onChange={(e) => setResetPassword(e.target.value)}
                    />
                    <label htmlFor="password"> New Password</label>
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
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <label htmlFor="password"> Confirm Password</label>
                  </div>
                  <p>Must be at least 8 characters long</p>
                  <button
                    type="submit"
                    className="common-btn text-nowrap fs-5 text-center"
                  >
                    Reset Password
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
    </>
  );
};

export default ResetPassword;
