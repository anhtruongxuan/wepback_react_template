import React from "react";
import "../scss/app.scss";
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="container">
          <div className="row justify-content-center">
            <h3>
              React App
            </h3>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;