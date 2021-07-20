import React from 'react';
import './css/Footer.css';

import {Link} from 'react-router-dom'

function Footer(){

    return(
      
        <div className='footer-container'>
           
            <section className="footer-subscription">

                <p className="footer-subscription-heading">

                     Reserve your delicious cakes with <b>Panitan Bakes</b> 

                </p>

                <p className="footer-subscription-text">
                    You Can Reach Us at Any time  <i className="fas fa-phone"> </i> </p>
                  <p>    Mobile <b> 0772324311 </b>/ Hotline <b>011-459 5001</b>
                    
                </p>

            </section>


            <section className="social-media">

                <div className="social-media-wrap">

                    <div className="footer-logo">

                        < Link to='/' className="social-logo">

                            Panitan  Bakes <i className="fab fa-typo3">

                            </i>
                        </  Link>
                    </div>


                <small className="website-rights">

                     &copy;  Panitan Bakes 2021. All Rights Reserved.
                </small>

                <div className="social-icon">     

                <Link
                className="social-icon-link facebook"
                to='/'
                target='_blank'
                aria-label='Facebook'>

                    <i className='fab fa-facebook-f'> </i>
                </Link>

                <Link
                className="social-icon-link instagram"
                to='/'
                target='_blank'
                aria-label='Instagram'>

                    <i className="fab fa-instagram"> </i>
                </Link>

                <Link
                className="social-icon-link twitter"
                to='/'
                target='_blank'
                aria-label='Twitter' >
                    <i className="fab fa-twitter"> </i>
                </Link>


                <Link
                className="social-icon-link Youtube"
                to='/'
                target='_blank'
                aria-label='Twitter' >
                    <i className="fab fa-youtube"> </i>
                </Link>


                </div>
                </div>
            </section>

            </div>


        
    )
}

export default Footer;