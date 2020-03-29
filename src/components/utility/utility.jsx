import React from 'react';
import './utility.scss';

function Utility(props) {
  return (
    <form id="utilityForm">
      <label for="chartType">Choose a chart type: </label>
      <select id="chartType">
        <option value="bar">Bar</option>
      </select>
      <span className="dateField">  Start Date: </span><input type="date" id="startDate" className="dateInput" name="startDate" min="2000-01-01"></input>
      <span className="dateField">  End Date: </span><input type="date" id="endDate" className="dateInput" name="endDate" max="2030-01-01"></input>
    </form>
  )
}

export default Utility;