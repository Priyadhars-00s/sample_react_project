import React, {useState, Component} from 'react';
import ReactDOM from 'react-dom';
import {Link, Switch, Route, Router} from 'react-router-dom';
import Employee from './APIcalls/employee';
import Department from './APIcalls/department';
import Project from './APIcalls/project';
import Error from './APIcalls/error';
import Protected from './APIcalls/protected';
import Unprotected from './APIcalls/unprotected';
import Home from './APIcalls/homepage';
import { createMemoryHistory } from 'history'
const history = createMemoryHistory()
  
class RouterComp extends Component {
    constructor(props){
        super(props)
        this.state={
          isAutheticated : 'false'
      };
          console.log(this.props)
          }
          login = (e) => {
            this.setState({isAutheticated : 'true'})
            {
                e.preventDefault()
            }
            console.log("loggedInUser:" , e.isAutheticated)
          };
               
      
        logout = (e) => {
          this.setState({isAutheticated : 'false'})
          {
              e.preventDefault()
          }
           console.log("loggedInUser:" + e.isAutheticated)
          };
        
       
    render()
    {
        return(
            <div>
            <Router history={history}>
            
            <h2>Welcome to Component...</h2>
            <ul>
              <li><Link to="/employees">Employees</Link></li>
              <li><Link to="/departments">Departments</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to='/Home'>Link to Home Page </Link></li>
              <li><Link to='/protected'>Link to Protected Page</Link></li>
             <li><Link to='/unprotected'>Link to Unprotected Page</Link></li>
            </ul>
              <br/>
              <button onClick={this.login}>Login</button>
              <button onClick={this.logout}>Logout</button>
            
                <Switch>

              <Route path="/employees" component={Employee}></Route>
              <Route path="/departments" component={Department}></Route>
              <Route path="/projects" component={Project}></Route>
               {/* <Route path="/" component={Error}></Route>  */}
               <Route exact path='/Home' component={Home}/>
              <Route path='/protected' component={Protected} />
              <Route path='/unprotected' component={Unprotected} />
              
              </Switch>
            </Router>
            </div>
     
        )
    }
      
}

export default RouterComp;