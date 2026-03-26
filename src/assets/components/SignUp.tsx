
import { Modal } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import "./SignUp.css";

interface SignUpModalProps {
  show: boolean;
  handleClose: () => void;
  switchToLogin: () => void;
}

export default function SignUpModal({ show, handleClose, switchToLogin }: SignUpModalProps) {
  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      centered 
      contentClassName="signup-modal-content"
      backdropClassName="custom-modal-backdrop"
    >
      <div className="signup-card modal-version">
        <button className="close-x" onClick={handleClose}>&times;</button>

        <a href="/" className="signup-logo-link">GOLF <span className="vibe-text">N</span>
        VIBES</a>

        <div className="signup-content">
          <h1 className="signup-title">Create an account</h1>
          
          <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group-custom">
              <label className="input-label">Your email</label>
              <input type="email" className="signup-input" placeholder="name@company.com" required />
            </div>

            <div className="input-group-custom">
              <label className="input-label">Password</label>
              <input type="password" className="signup-input" placeholder="••••••••" required />
            </div>

            <div className="input-group-custom">
              <label className="input-label">Confirm password</label>
              <input type="password" className="signup-input" placeholder="••••••••" required />
            </div>

            <div className="checkbox-container">
              <input id="terms" type="checkbox" required />
              <label htmlFor="terms">
                I agree to the <a href="#">Terms & Conditions</a>
              </label>
            </div>

            <button type="submit" className="submit-btn">Create an account</button>

            <div className="social-divider"><span>Or sign up with</span></div>

            <div className="social-group">
              <button type="button" className="social-btn">
                <FcGoogle size={22}/>
              </button>
              <button type="button" className="social-btn">
                <FaLinkedin color="#0A66C2" size={22} />
              </button>
              <button type="button" className="social-btn">
                <FaFacebook color="#1877F2" size={22} />
              </button>
            </div>

             <p className="login-link-text">
              Don't have an account?{" "}
              <button 
                type="button" 
                className="switch-btn-link" 
                onClick={switchToLogin}
              >
                Sign Up
              </button>
            </p>
          </form>
        </div>
      </div>
    </Modal>
  );
}