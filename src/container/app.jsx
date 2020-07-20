import React from "react";
import "../scss/app.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from '../components/Header/Header';
import Footer from '../components/Footer/Footer.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  clickMe() {
    alert('Click me with function component');
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Header headerLeft="Logo company" headerRight="Menu conpany" handleClick={this.clickMe}/>
          <div className="row justify-content-center">
            <h3 className="mx-5">
              React App
            </h3>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;