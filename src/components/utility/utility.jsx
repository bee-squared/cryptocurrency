import React from 'react';
import './utility.scss';
import 'bootstrap/dist/css/bootstrap.css'

function Utility(props) {
  return (
    <form>
      <div className="input-container">
        <div class="input-group input-group-sm" id="chart-type-input">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01" id="inputGroup-sizing-sm">Chart Type</label>
          </div>
          <select class="form-control" id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="Bar" selected="Bar">Bar</option>
          </select>
        </div>
        <div class="input-group input-group-sm" id="chart-type-input">
          <div class="input-group-prepend">
            <span class="input-group-text col-form-label-sm" id="inputGroup-sizing-sm">Start and End Dates</span>
          </div>
          <input type="date" class="form-control" id="inputGroup-sizing-sm"/>
          <input type="date" class="form-control" id="inputGroup-sizing-sm"/>
        </div>
      </div>
    </form>
  )
}

export default Utility;