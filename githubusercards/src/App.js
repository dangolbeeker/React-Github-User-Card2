import React from "react";
import axios from "axios";
import "./App.css";

import Card from "./components/Card";
import FollowerList from "./components/FollowerList";
import GHForm from "./components/GHForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      githubHandle: "dangolbeeker",
      userObj: {},
      followers: []
    };
    this.getData = this.getData.bind(this);
    // this.changeGitHubHandle = this.changeGitHubHandle.bind(this);
  }

  getData() {
    let urlArray = [
      `https://api.github.com/users/${this.state.githubHandle}`,
      `https://api.github.com/users/${this.state.githubHandle}/followers`
    ];
    // Promise.all() takes in an array of promises and outputs an array of the returned promises
    Promise.all(
      urlArray.map(url =>
        
        
        
        // example of using axios api
        axios
          .get(url)
          .then(res => res.data)
          .catch(err => console.log("error: ", err))
      )
    ).then(dataArray => {
      // console.log(dataArray);
      this.setState(
        {
          userObj: dataArray[0],
          followers: dataArray[1]
        }
        // () => console.log("state: ", this.state)
      );
    });
  }
  changeGithubHandle= (input) => {
    this.setState({ githubHandle: input });
  }

  componentDidMount() {
    this.getData();
    console.log("CDM");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.githubHandle !== this.state.githubHandle) {
      this.getData();
      console.log("CDUP");
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div className="App">
        <Card userObj={this.state.userObj} />
        <FollowerList followers={this.state.followers} />
        <GHForm changeGithubHandle={this.changeGithubHandle} />
        <div>{this.state.githubHandle}</div>
      </div>
    );
  }
}

export default App;
