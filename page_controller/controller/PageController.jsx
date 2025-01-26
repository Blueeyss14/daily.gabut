import React from 'react'
import Home from '../views/home';
import Project from '../views/project';

const pages = [
    <Home className="page" key={"home"} />, 
    <Project className="page" key={"project"} />
  ];

const PageController = ({}) => {

  return (
    <div className="h-full w-full flex snap-x snap-mandatory">
            {pages.map((page) => page)}
        </div>
  )
}

export default PageController
