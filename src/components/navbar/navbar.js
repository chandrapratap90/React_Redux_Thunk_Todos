import React from 'react';
import {Link ,NavLink} from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to ="/">Navbar</Link>
       <div className="collapse navbar-collapse" >
            <div className="navbar-nav">
             <NavLink className="nav-item nav-link" to ="/createProject">Create Project</NavLink>
             <NavLink className="nav-item nav-link" to="/projectView">Project View</NavLink>
             </div>
        </div>
</nav>
  )
}

export default navbar
