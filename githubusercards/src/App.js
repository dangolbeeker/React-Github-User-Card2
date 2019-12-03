import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Usercard from './components/Usercard';
import User from './components/User';

class app extends Component {
  constructor() {
    super();
    this.state = {
      user:[],
      followers:[]
    };
  }

  //axios all for DRY code 
  // // axios.all([ axios.get('https://api.github.com/users/dangolbeeker'), 
  // axios.get('https://api.github.com/users/dangolbeeker/followers') ]) .then(axios.spread((usersRes, followersRes) => { 
  // //   // do something with both responses })) .catch((googleErr, appleErr) => { // do something with request failures });

  componentDidMount() {
    axios
      .get('https://api.github.com/users/dangolbeeker')
      .then(res => {
        console.log(res);
        this.setState({
          user: res.data
        })
      })
      .catch(error => {
        console.log(error);
      })

    axios
      .get('https://api.github.com/users/dangolbeeker/followers')
      .then(res => {
        console.log(res);
          this.setState({
            followers: res.data
          })
        })
        .catch(error => {
          console.log(error);
        })
      }

      render() {
        return (
          <div>
            <h1>Yo</h1>
            <User user={this.state.user}/>
            <Usercard user={this.state.user} followers={this.state.user.followers}/>
          </div>
        )
      }
  }

  export default app;
