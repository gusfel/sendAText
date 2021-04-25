import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      to: '',
      message: '',
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
      method: 'POST',
      data: this.state,
      url: '/send',
    };
    axios(options);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          To number:
          <input
            name="to"
            type="number"
            value={this.state.to}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Message
          <input
            name="message"
            type="text"
            value={this.state.message}
            onChange={this.handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
