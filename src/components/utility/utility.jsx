import React from 'react';
import './utility.scss';
import 'bootstrap/dist/css/bootstrap.css'

function Utility(props) {
  return (
    <form>
      <div className="input-container">
        <div class="input-group mb-3" id="chart-type-input">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Chart Type</label>
          </div>
          <select class="custom-select" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="Bar">Bar</option>
          </select>
        </div>
        <div class="input-group" id="date-input">
          <div class="input-group-prepend">
            <span class="input-group-text">Select Dates</span>
          </div>
          <div>
            <input type="date" aria-label="First name" class="form-control" id="start-date-input"/>
            <input type="date" aria-label="Last name" class="form-control" id="end-date-input"/>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Utility;