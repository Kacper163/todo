import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Todolist from "./TodoList";
import Login from "./login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
  
var destination = document.querySelector("#container");
  
ReactDOM.render(
  <Router>
    <div>
        <Switch>
            
            <Route exact path="/Todolist" component={Todolist} />
            <Route path="/" component={Login} />
          </Switch>
    </div></Router>,
    
    destination
);