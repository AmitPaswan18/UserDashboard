import NavBar from "./components/Navbar";
import AllUsers from "./components/AllUsers.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import { Dashboard } from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <AllUsers />
        <Switch>
          <Route exact path="/">
            {<Home />}
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
