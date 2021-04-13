import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link, Switch, Router, Route} from 'react-router-dom';
import Employee from './employee';
import Department from './department';
import Project from './project';
import Error from './error';



class RouterComp extends Component {
    constructor(props){
        super(props)
        console.log("Props")
        }
    render()
    {
        return(
            <div>
            <Router>
            
            <h2>Welcome to App Component...</h2>
            <ul>
              <li><Link to="/employees">Employees</Link></li>
              <li><Link to="/departments">Departments</Link></li>
              <li><Link to="/projects">Projects</Link></li>
            </ul>
                         
              
                <Switch>

              <Route path="/employees" component={this.props.Employee}></Route>
              <Route path="/departments" component={this.props.Department}></Route>
              <Route path="/projects" component={this.props.Project}></Route>
              <Route path="/" Component={Error}></Route>
              </Switch>
            </Router>
            </div>
     
        )
    }
      
}
export default RouterComp;