import React from 'react';
import ProjectList from './ProjectList.jsx'

const projects = [
  {
    name: 'BookNook',
    github: 'www.github.com',
    img: 'https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
  },
  {
    name: 'Cryptonium',
    github: 'www.github.com',
    img: 'https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
  },
  {
    name: 'Event HUD',
    github: 'www.github.com',
    img: 'https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
  },
]

export default class App extends React.Component {
  render() {
    return (<div className="app">
      <div className="greeting">Hello</div>
      <ProjectList projects={projects}/>
    </div>)
  }
}
