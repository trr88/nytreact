
var React = require("react");

var History = React.createClass({
 
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search History</h3>
        </div>
        <div className="panel-body text-center">

          }
          {this.props.history.map(function(item, i) {
            return (
              <p key={i}>{item.title} - {item.date}</p>
            );
          })}
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = History;
