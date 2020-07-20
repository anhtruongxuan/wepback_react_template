import React from "react";
import "./footer.scss";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer__left">
              <p>Footer content left</p>
            </div>
            <div className="col-md-8 footer__right">
              <p>Footer content right</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}