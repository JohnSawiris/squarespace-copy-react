import React from 'react';
import PropTypes from 'prop-types';


function Title(props) {

  const lrgText = {
    textAlign:'center',
    fontSize: '3em',
    fontWeight: '200',
    color: '#3a3a3a',
    margin: '0',
  };

  const smText = {
    textAlign:'center',
    fontWeight:'200',
    fontSize: '1.2em',
  };

  const titleWrap = {
    maxWidth:'1000px',
    margin:'auto',
    borderBottom:'1px solid #ddd',
    padding: '100px'
  };

  return (
    <div style={titleWrap}>
      <h1 style={lrgText}>{props.large}</h1>
      {(props.small) ? <h4 style={smText}>{props.small}</h4> : ''}
    </div>

  );
}

Title.propTypes = {
  large:PropTypes.string,
  small:PropTypes.string
};

export default Title;
