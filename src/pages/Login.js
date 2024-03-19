import React from "react";
import "../login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login-main">
      <div className="image-div">
        <img
          className="img"
          src="https://thecybersafetylady.com.au/wp-content/uploads/2018/10/Screen-Shot-2018-10-05-at-2.09.37-pm-600x900.png"
          alt="img"
        />
      </div>
      <div className="form-div">
        <form className="login-form">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
            alt="img"
          ></img>
          <input type="text" placeholder="Username or Email" required />
          <input type="password" placeholder="Password" required />
          <Link to="/login" className="login-btn">
            <button type="submit">Login</button>
          </Link>
          <div className="separator">
            <hr className="line" />
            <span className="or">OR</span>
            <hr className="line" />
          </div>
          <div className="facebook-link">
            <a href="#/" className="facebook-link">
              <FontAwesomeIcon icon={faFacebookF} className="facebook-icon" />
              <span>Login with Facebook</span>
            </a>
          </div>
          <div className="link-container">
            <a href="#/">Forgot Password?</a>
          </div>
        </form>
        <div className="signup-div">
          <div className="bottom-container">
            <a href="#/">Don't have an account? </a>
            <span style={{ color: "#3897f0" }}>Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
