import React from 'react';
import './utility.scss';

function Utility(props) {
  return (
    <div>
      <label for="chartType">Choose a chart type:</label>
      <select id="chartType">
        <option value="bar">bar</option>
      </select>
    </div>
  )
}

export default Utility;