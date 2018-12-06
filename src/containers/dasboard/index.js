import React, { Component } from 'react'
import Header from '../../components/header'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import CreateProject from '../CreateProject';
import ProjectView from '../ProjectView'

 class Dasboard extends Component {
  render() {
    return (
      <BrowserRouter>         
      <div>
        <Header/>
         <Switch>  
               <Route exact path='/createProject' component = {CreateProject}/>
               <Route exact path='/createProject/:id' component = {CreateProject}/>
               <Route path='/projectView' component={ProjectView}/>
         </Switch>     
        
      </div>
      </BrowserRouter>
    )
  }
}

export default Dasboard

