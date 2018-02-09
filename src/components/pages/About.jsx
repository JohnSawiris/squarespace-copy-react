import React from 'react';
import Banner from '../ui/Banner';
import Header from '../ui/Header';
import Nav from '../ui/Nav';
import Title from '../ui/Title';

import aboutBanner from '../../assets/images/banner1.jpg';

function About() {

  const titleText = {
    small: 'Our platform empowers millions of people — from individuals and local artists to entrepreneurs shaping the world’s most iconic businesses — to share their stories and create an impactful, stylish, and easy-to-manage online presence.',
    large: 'Squarespace makes beautiful products to help people with creative ideas succeed.'
  };

  return (
    <div>
      <Header
        bgImg={aboutBanner}
        pageTitle="About Us"
        head="HELPING CREATIVE
         IDEAS SUCCEED"/>
      <Nav />
      <Title {...titleText} />
    </div>
  );
}

export default About;
