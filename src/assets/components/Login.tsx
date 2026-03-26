import { Modal } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import "./LogIn.css";

interface LogInModalProps {
  show: boolean;
  onHide: () => void;
  onSwitch: () => void; 
}

export default function LogInpModal({ show, onHide, onSwitch }: LogInModalProps) {
  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      centered 
      contentClassName="login-modal-content"
      backdropClassName="custom-modal-backdrop"
    >
      <div className="login-card modal-version">
         <button 
          className="close-x" 
          onClick={(e) => {
            e.stopPropagation();
            onHide();
          }} 
          type="button" 
          aria-label="Close"
        >
          &times;
        </button>

        <a href="/" className="login-logo-link">
          GOLF <span className="vibe-text">N</span> VIBES</a>

        <div className="login-content">
          <h1 className="login-title">Log In</h1>
          
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group-custom">
              <label className="input-label">Your email</label>
              <input type="email" className="login-input" placeholder="name@company.com" required />
            </div>

            <div className="input-group-custom">
              <label className="input-label">Password</label>
              <input type="password" className="login-input" placeholder="••••••••" required />
            </div>

            <button type="submit" className="submit-btn">Log In</button>

            <div className="social-divider"><span>Continue with</span></div>

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

            <p className="signup-link-text">
              Don't have an account?{" "}
              <button 
                type="button" 
                className="switch-btn-link" 
                onClick={onSwitch}
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