import React, { Component } from "react";

class Skill_Item extends Component {
  render() {
    return (
      <li class="style3">
        <p>{this.props.skill.skill_title}</p>
        <strong>{this.props.skill.percentage}</strong>
      </li>
    );
  }
}
export default Skill_Item;
