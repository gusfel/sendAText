import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const options = {
      method: 'get',
      params: this.state,
      url: '/login',
    };
    axios(options)
      .then(res => {
        // console.log(res);
        if (res.data.length) {
          this.props.updateUser(res.data);
        }
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div>
          Welcome back!
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Password
            <input
              name="password"
              type="text"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
