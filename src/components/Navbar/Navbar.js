import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './Navbar2.css';
import logo from '../image/logo.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar,setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);//让button在refresh的时候不再出现

  window.addEventListener('resize', showButton);

  const changeBackground = () =>{
    if(window.scrollY >= 80){
      setNavbar(true);
    }else{
      setNavbar(false);
    }

  }

  window.addEventListener('scroll',changeBackground)
  
  return (
    
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className='navbar-container'>
         
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>           
              <img className = 'logo-picture' src={logo} alt="Logo"/> 
          </Link>
          
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/what-we-do' className='nav-links' onClick={closeMobileMenu}>
                What We Do
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/people-and-career' className='nav-links' onClick={closeMobileMenu}>
                People and Career
              </Link>
            </li>


            <li>
              <Link to='/contact-us' className='nav-links-mobile' onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>

          {button && <Button buttonStyle='btn--outline'>CONTACT US</Button>}

        </div>
      </nav>
    
  );
}

export default Navbar;