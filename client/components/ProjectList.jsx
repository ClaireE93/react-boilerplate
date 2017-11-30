import React from 'react';
import ProjectItem from './ProjectItem.jsx'

export default class ProjectList extends React.Component {
  render() {
    return (<div>
      {this.props.projects.map((item, i) => (
        <ProjectItem project={item}/>
      ))}
    </div>)
  }
}
