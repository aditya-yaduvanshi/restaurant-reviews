import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddReview from "./components/add-review";
import Login from "./components/login";
import Restaurant from "./components/restaurant";
import RestaurantList from "./components/restaurant-list";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/restaurants" className="navbar-brand">Restuarant Reviews</a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/restaurants"} className="nav-link">Restaurants</Link>
          </li>
          <li className="nav-item">
            { user ? (
              <button onClick={logout} className="nav-link btn" style={{cursor:'pointer'}}>
                Logout {user.name}
              </button>
            ) : (
              <Link to={"/login"} className="nav-link">Login</Link>
            )}
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/restaurants"]} component={RestaurantList} />
          <Route path="/restaurants/:id/review" render={(props)=>(
            <AddReview {...props} user={user} />
          )} />
          <Route path="/restaurants/:id" render={(props)=>(
            <Restaurant {...props} user={user} />
          )} />
          <Route path="/login" render={(props)=>(
            <Login {...props} login={login} />
          )} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
