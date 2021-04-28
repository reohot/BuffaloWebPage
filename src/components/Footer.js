import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
                    <div className='footer-link-items'>
                        <ul className='footer-menu'>
                            <li className = 'footer-item'>
                                <Link to='/' className = 'footer-links'>Home</Link>
                            </li>
                            
                            <li className = 'footer-item'>
                                <Link to='/about-us' className = 'footer-links'>About Us</Link>
                            </li>

                            <li className = 'footer-item'>
                                <Link to='/'className = 'footer-links'>What We Do</Link>
                            </li>

                            <li className = 'footer-item'>
                                <Link to='/'className = 'footer-links'>People and Career</Link>
                            </li>
                            
                            <li className = 'footer-item'>
                                <Link to='/'className = 'footer-links'>Contact Us</Link>
                            </li>
                        </ul>       
                    </div>
            

            <section className='social-media'>
                <div className='social-media-wrap'>

                    <div className ='social-icons'>
                        <Link
                        className ='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />
                        </Link>

                        <Link
                        className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </Link>

                        <Link
                        className='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </Link>

                        <Link
                        className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </Link>
                        
                        <Link
                        className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>  
        </div>
    )
}



export default Footer
