import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsPersonCircle } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";
import './NavBar.css'


function NavBar() {
 return( 
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Golf N Vibes</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
         <NavDropdown
              id="nav-dropdown-dark-example"
              title="Events"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#">Morocco</NavDropdown.Item>
              <NavDropdown.Item href="#"> Kenya</NavDropdown.Item>
              <NavDropdown.Item href="#">Europe</NavDropdown.Item>
              <NavDropdown.Item href="#">South Africa</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#"> Past Events</NavDropdown.Item>
            </NavDropdown>
        
        </li>
        
        <li className="nav-item">
         <NavDropdown
              id="nav-dropdown-dark-example"
              title="About Us"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#">Our Story</NavDropdown.Item>
              <NavDropdown.Item href="#"> Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#">Testimonials</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#"> FAQs</NavDropdown.Item>
            </NavDropdown>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Register</a>
        </li>
      </ul>

      <div className='personalprofile'>

       <li>
        <div className='cartprofile'>
          <BsCartCheckFill size={20} />
        </div>
      </li>

      <li>
        <div className='userprofile'>
        <BsPersonCircle size={20} />

        </div>
      </li>

      <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{marginRight: "20px"}}>Login</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style={{ marginRight: '90px' }}>Sign Up</a>
        </li>
        </div>
     
    </div>
  </div>
</nav>

    </>
 );
}

export default NavBar;