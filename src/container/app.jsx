import React from "react";
import "../scss/app.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from '../components/Header/Header';
import Footer from '../components/Footer/Footer.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  checkArray() {
    console.log('here');
    const array = [
      'animal/mammal/dog',
      'animal/mammal/cat/tiger',
      'animal/mammal/cat/lion',
      'animal/mammal/elephant',
      'animal/reptile',
      'plant/sunflower'
    ]
    console.log('array', array);
    let mainObject = {};
    array.map((item) => {
      const newSplit = item.split('/');
      console.log('split', newSplit);
      // mainObject = Object.assign(mainObject, newSplit);
      console.log('mainObject', mainObject);

      // newSplit.map((item) => {
      //   console.log('item string', item);
      // })
      for (const key of newSplit) {
        mainObject[key] = 'new';
      }
    })
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
            <button onClick={this.checkArray}>Check Array Split</button>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;