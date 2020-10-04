import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 55 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Pricing</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Free</h3>
                <h4>$0.00</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li> 1+ Million royalty-free images</li>
                  <li> Manage multiple websites</li>
                  <li>Access to the YAYA Editor</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='second'>
                Upgrade
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Premium</h3>
                <h4>$29.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li> Connect your own domain</li>
                  <li> Backup your website</li>
                  <li> Secure your site with SSL</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                 Upgrade
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Mail</h3>
                <h4>$99.99</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li> 5GB Storage</li>
                  <li> Unlimited amount of aliases</li>
                  <li> Fast and secure mail with SSL / TLS</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='second'>
                Upgrade
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;

