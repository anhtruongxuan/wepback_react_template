import React from "react";
import AddTodo from '../components/Todo/AddTodo.jsx';
import ListTodo from '../components/Todo/ListTodo.jsx';
import "../scss/app.scss";
import { Link, Route, Switch, BrowserRouter as Router, useHistory } from "react-router-dom";

import Category from '../views/Category.jsx';
import Products from '../views/Products.jsx';
import Login from '../views/Login.jsx';
import Admin from '../views/Admin.jsx';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute.jsx';

const routes = [
  {
    path: "/category",
    exact: false,
    component: Category
  },
  {
    path: "/products",
    exact: false,
    component: Products
  },
  {
    path: "/login",
    exact: false,
    component: Login
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="container">
          <div className="row ">
            <div className="col-md-6 my-3">
              <h3 className="text-center">
                React Todo App
              </h3>
              <AddTodo />
              <ListTodo />
            </div>
          </div>
          <div className="row ">
            <div className="col-md-3">
              <div>
                <ul>
                  <li>
                    <Link  to="/category">Category</Link>
                  </li>
                  <li>
                    <Link to="/products">Products</Link>
                  </li>
                  <li>
                    <Link to="/admin">Admin area</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-9">
              <Switch>
                <Route path="/category" component={Category} />
                <Route path="/products" component={Products} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/admin" component={Admin} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;