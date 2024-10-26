import { Flex, Input } from "antd";
import React from "react";

const Verification = () => {
  return (
    <>
      <div className="page-background">
        <div className="d-flex align-items-center justify-content-center">
          <div className="password-box">
            <div className="form-content m-5">
              <h3>Verification</h3>
              <h4>
                Enter the 6-digit code that we sent to <br />
                s********0@gmail.com
              </h4>
              <Flex gap="middle" align="flex-start" vertical>
                <Input.OTP length={6} />
              </Flex>
              <button className="common-btn">Submit</button>
              <p className="text-center otp-text">
                OTP(One time password) valid for 5 minutes
              </p>
              <p className="code-text">
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
