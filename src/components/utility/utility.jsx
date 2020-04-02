import React from 'react';
import './utility.scss';
import 'bootstrap/dist/css/bootstrap.css'

function Utility(props) {
  return (
    <form>
      <div className="input-container">
        <div className="input-group input-group-sm" id="chart-type-input-01">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01" id="inputGroup-sizing-sm">Chart Type</label>
          </div>
          <select className="form-control " id="inputGroupSelect01" defaultValue="Bar">
            <option value="choose">Choose...</option>
            <option value="Bar">Bar</option>
          </select>
        </div>
        <div className="input-group input-group-sm" id="chart-type-input">
          <div className="input-group-prepend">
            <span className="input-group-text col-form-label-sm" id="inputGroup-sizing-sm">Start and End Dates</span>
          </div>
          <input type="date" className="form-control" id="inputGroup-sizing-sm" name="startDate" onChange={props.handleDateChange} />
          <input type="date" className="form-control" id="inputGroup-sizing-sm" name="endDate" onChange={props.handleDateChange} />
        </div>
      </div>
    </form>
  )
}

export default Utility;