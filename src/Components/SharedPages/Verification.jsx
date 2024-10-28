import { Flex, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Verification = ({ email }) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const handleOtp = async (e) => {
    e.preventDefault();
    try {
      const data = {
        otp,
        email,
      };
      console.log(data);

      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/verifyotp",
        data
      );

      console.log(response);
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="page-background">
        <div className="d-flex align-items-center justify-content-center">
          <div className="otp-box">
            <div className="form-content m-5">
              <h3>Verification</h3>
              <h4>
                Enter the 6-digit code that we sent to <br />
                <span> s********0@gmail.com</span>
              </h4>
              <Flex gap="middle" align="flex-start" vertical className="m-2">
                <Input.OTP length={6} onChange={(value) => setOtp(value)} />
              </Flex>
              <button className="otp-btn" onClick={handleOtp}>
                Submit
              </button>
              <p className="text-center otp-text">
                OTP(One time password) valid for 5 minutes
              </p>
              <p className="code-text text-center p-2">
                Didn’t receive your code, or did the code time expire? <br />
                <a href="">Get a new one.</a>
              </p>
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

export default Verification;
