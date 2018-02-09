import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';


function Header(props) {


  return (
    <div className='main-banner'>
      <div className='container'>
        <Link to='/'><img src={logo} /></Link>
        <div className='main-title'>
          <small>{props.pageTitle}</small>
          <h2>{props.head}</h2>
        </div>
      </div>
      <style global jsx>{`
        .container {
            width: 84vw;
            margin: auto;
        }

        .main-banner {
            background: url(${props.bgImg}) no-repeat center;
            height: 680px;
            background-size: cover;
        }

        .main-banner img {
          position: relative;
          top: 20px
        }

        small {
            text-transform: uppercase;
        }

        .main-title {
          position: relative;
          top: 50%;
        }
        .main-title h2 {
          font-size: 2rem;
          max-width: 390px;
          line-height: 3rem;
          font-weight: 400;
          margin-top: 0;
          letter-spacing: 4px;
        }
        .main-banner .container {
            height: 100%;
            color: #fff;
        }
      `}</style>
    </div>
  );
}

Header.propTypes = {
  bgImg:PropTypes.string,
  pageTitle:PropTypes.string,
  head:PropTypes.string
};

export default Header;
