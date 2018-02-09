import React from 'react';
import PropTypes from 'prop-types';

function GridCell(props) {
  return (
    <div>
      <span class="cell-job-count">{props.num}</span>
      <h3 class="cell-department">{props.department}</h3>
      <span class="cell-locations">{props.city}</span>
    </div>
  );
}

GridCell.propTypes = {
  num: PropTypes.number,
  department: PropTypes.string,
  city: PropTypes.string
};

export default GridCell;
