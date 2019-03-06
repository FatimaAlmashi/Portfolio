import React, { Component } from "react";
import Skill_Item from "./Skill_Item";

class Skills extends Component {
  render() {
    const skillList = this.props.skills.map(skill => (
      <Skill_Item key={skill.skill_title} skill={skill} />
    ));

    return (
      <section id="second" class="main special">
        <header class="major">
          <h2>المهارات</h2>
        </header>

        <ul class="statistics">{skillList}</ul>
      </section>
    );
  }
}

export default Skills;
