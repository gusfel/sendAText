import React from 'react';
import axios from 'axios';
import Login from './Login.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      to: '',
      message: '',
      page: 'login',
      user_id: null,
      username: '',
      friends: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateUser = this.updateUser.bind(this);
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
      method: 'POST',
      data: this.state,
      url: '/send',
    };
    axios(options);
    event.preventDefault();
  }

  updateUser(obj) {
    const { userId, username } = obj;
    this.setState({
      userId,
      username,
      page: 'main',
    });
  }

  render() {
    const { to, message, page } = this.state;
    if (page === 'login') {
      return (
        <Login updateUser={this.updateUser} />
      );
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          To number:
          <input
            name="to"
            type="number"
            value={to}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Message
          <input
            name="message"
            type="text"
            value={message}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
