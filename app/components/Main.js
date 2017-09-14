
var React = require("react");

var Form = require("./children/Form");
var Results = require("./children/Results");
var History = require("./children/History");


var helpers = require("./utils/helpers");

var Main = React.createClass({

 
  getInitialState: function() {
    console.log("Main.js getInitialState");
   

    return { searchTerm: "", results: "", history: [] };
  },

 
  componentDidMount: function() {
    console.log("Main.js componentDidMount");
  
    helpers.getHistory().then(function(response) {
      if (response !== this.state.history) {
        console.log("Main.js componentDidMount response=", response);
        this.setState({ history: response.data });
      }
    }.bind(this));
  },
  componentDidUpdate: function() {
    console.log("Main.js componentDidUpdate");
    return "Main.js componentDidUpdate";
  },
  setTerm: function(term) {
    this.setState({ searchTerm: term });

  },
 
  render: function() {
    return (
        <div className="container">
          <div className="jumbotron">
            <h2>New York Times Search</h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Form setTerm={this.setTerm} />
            </div>
          </div>
          <div className="row">
            {/* results panel */}
            <div className="col-lg-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Search Results</h3>
                </div>
                <div className="panel-body" id="well-section">

                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* history panel */}
            <div className="col-lg-12">
              <History history={this.state.history} />
            </div>
          </div>
        </div>
    );
  }
});
module.exports = Main;
