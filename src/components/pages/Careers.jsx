import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../ui/Nav';
import Header from '../ui/Header';
import Title from '../ui/Title';
import GridCell from '../ui/GridCell';

import data from '../data/data';
import careersBanner from '../../assets/images/banner2.jpg';

function Careers() {

  const titleText = {
    small: '',
    large: 'At Squarespace, the world’s most talented engineers, designers, and thought leaders are shaping the future of online publishing.'
  };

  return (
    <div>
      <Header bgImg={careersBanner}
        head="JOIN OUR TEAM"
        pageTitle="CAREERS"/>
      <Nav />
      <Title {...titleText} />
      <div className="container grid-something">
        {data.map((item, i) =>
          <Link to="#" className="grid-box">
            <GridCell {...item}
              key={i}/>
          </Link>
        )}
      </div>
      <style jsx>{`
          .grid-something {
            display: grid;
            grid-gap: 40px;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            margin-top: 100px;
          }

          a.grid-box {
              border: 1px solid #b3b3b3;
              color: #828282;
              text-decoration: none;
              padding: 30px;
          }

          a.grid-box span:first-child {
              font-size: 6em;
              font-weight: lighter;
          }

          h3 {
              font-weight: 200;
              color: #000;
              font-size: 1.7em;
              margin: 0 0 10px;
          }
      `}</style>
    </div>
  );
}

export default Careers;
