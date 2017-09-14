
var React = require("react");
var Form = React.createClass({


  getInitialState: function() {
    console.log("Form.js getInitialState");
    
    return { term: "" };
  },

  
  handleChange: function(event) {
    console.log("Form.js handleChange");

  },

  handleSubmit: function(event) {
    event.preventDefault();
    console.log("Form.js handleChange");

  },

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Search Parameters</h3>
        </div>
        <div className="panel-body">
          <form role="form">
            <div className="form-group">
              <label htmlFor="search">Search Term:</label>
              <input type="text" className="form-control" id="search" />
            </div>
            <div className="form-group">
              <label htmlFor="start-year">Start Year:</label>
              <input type="text" className="form-control" id="start-year" />
            </div>
            <div className="form-group">
              <label htmlFor="end-year">End Year:</label>
              <input type="text" className="form-control" id="end-year" defaultValue="2017" />
            </div>
            <button type="submit" className="btn btn-default" id="search-btn">Search</button>
            <button type="button" className="btn btn-default">Clear</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Form;
