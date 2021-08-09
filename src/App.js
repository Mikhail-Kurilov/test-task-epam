import React from "react";
import axios from "axios";
import "./App.css";
import List from "./components/list/List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture`
      )
      .then((result) => {
        this.setState({ users: result.data.results });
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.users.length ? (
          <List users={this.state.users} />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default App;
