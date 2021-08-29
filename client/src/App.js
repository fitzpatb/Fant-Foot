
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from "react";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.scss';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/articles">
            <Articles />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
