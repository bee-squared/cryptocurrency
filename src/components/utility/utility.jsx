import React from 'react';
import './utility.scss';
import 'bootstrap/dist/css/bootstrap.css'

function Utility(props) {
  return (
    <form>
      <div className="input-group">
        <div class="chart-type-container">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Chart Type</label>
          </div>
          <select class="custom-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="Bar">Bar</option>
          </select>
        </div>
        <div class="date-container">
          <div class="input-group-prepend">
            <span class="input-group-text">Select Dates</span>
          </div>
          <input type="date" aria-label="Start Date" class="form-control id=" />
          <input type="date" aria-label="End Date" class="form-control" />
        </div>
      </div>
    </form>
  )
}

export default Utility;