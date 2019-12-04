import React, { Component } from "react";
import Follower from "./Follower";

export default class FollowerList extends Component {
  render() {
    return (
      <div>
        {this.props.followers.map(follower => (
          <Follower follower={follower} />
        ))}
      </div>
    );
  }
}
