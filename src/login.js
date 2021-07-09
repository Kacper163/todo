import React, { Component } from 'react';

import LoginHelper from './LoginHelper.js';

class Login extends Component {

  constructor (props){
    super(props);

    this.state = {
        login: "",
        password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  usernameChangeHandler = (event) => {
    this.setState(prevState => ({
      login: event.target.value
    }));
  }

  passwordChangeHandler = (event) => {
    this.setState(prevState => ({
      password: event.target.value
    }));
  }

  handleSubmit(e) {
      e.preventDefault();

      if (LoginHelper.loginUser(this.state.login, this.state.password)) {
          alert("Pomyślnie zalogowano");
          window.location.href = '/TodoList'
      } else {
          alert("Błędne dane logowania");
      }
  }

  render () {
    LoginHelper.isLoggedIn();
    return (
        <div className="container vw-100">
          <div className="row">
            <div className="col-lg-8 col-sm-12 text-center mx-auto">
              <h1 className="display-4 mb-3">Zaloguj się </h1>
              <p className="lead mb-5">Podaj swój login i hasło do naszej appki</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mx-auto text-center">
              <form className="form-noborder" onSubmit={this.handleSubmit}>
                <div className="row mb-5 justify-content-center">
                  <div className="col-lg-12 col-sm-12 form-group">
                    <input className="form-control form-control-lg"
                      placeholder="Login" type="text" onChange={this.usernameChangeHandler}></input>
                    <input className="form-control form-control-lg"
                      placeholder="Hasło" type="password" onChange={this.passwordChangeHandler}></input>
                  </div>

                  <div className="col-lg-3 col-sm-12 form-group">
                    <button className="btn btn-primary btn-block w-100 btn-lg" type="submit">Zaloguj</button>
                  </div>
                </div>
              </form>
              <p className="small">Login: Admin Hasło: zaq1@WSX</p>
              <ul className="list-inline my-5">
                <li className="list-inline-item">
                  <a className="h4 text-muted p-2" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    );
  }

}

export default Login;