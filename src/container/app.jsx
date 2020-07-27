import React from "react";
import "../scss/app.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from '../components/Header/Header';
import Footer from '../components/Footer/Footer.jsx';
import InputField from '../components/InputField/InputField';
// import CheckboxField from '../components/CheckboxField/CheckboxField.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  inputOnChange = (e) => {
    console.log("object", e.target.value);
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Header headerLeft="Logo company" headerRight="Menu conpany"/>
          <div className="row justify-content-center">
            <h3 className="d-flex w-100 justify-content-center mb-5">
              React App
            </h3>
            <InputField placeHolder="Content" onChangeHandle={e => this.inputOnChange(e)}/>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;