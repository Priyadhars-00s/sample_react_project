import React, {useState, Component} from 'react';
import ReactDOM from 'react-dom';
import {Link, Switch, Route, Router} from 'react-router-dom';
import Employee from './employee';
import Department from './department';
import Project from './project';
import Error from './error';
import Protected from './protected';
import Unprotected from './unprotected';
import Home from './homepage';
import { createMemoryHistory } from 'history'
const history = createMemoryHistory()
//const[isAutheticated, setisAutheticated] = useState(false);
    
    // onEnter = (e) => {
    //     if (e.key === 'Enter') {
    //       e.preventDefault()
    //     }
    //   };
//   onKeyPress={this.onEnter}
   
  
class RouterComp extends Component {
    constructor(props){
        super(props)
       this.state={
        isAutheticated : ' '
    };
        console.log(this.props)
        }
        login = (e) => {
          if(e.isAutheticated === 'true'){
              e.preventDefault()
          }
          //console.log("loggedInUser:" + isAutheticated)
        };
             
      //   function logout(){
      //     setisAutheticated(false);
      //     console.log("loggedInUser:" + isAutheticated)
      //   }
      // }
       logout = (e) => {
          if(e.isAutheticated === 'false'){
              e.preventDefault()
          }
         // console.log("loggedInUser:" + isAutheticated)
        };
      
        
    render()
    {
        return(
            <div>
            <Router history={history}>
            
            <h2>Welcome to App Component...</h2>
            <ul>
              <li><Link to="/employees">Employees</Link></li>
              <li><Link to="/departments">Departments</Link></li>
              <li><Link to="/projects">Projects</Link></li>
            </ul>
                         
            <ul>
          <li>
            <Link to='/'>
              Link to Home Page
          </Link>
          </li>
          <li>
            <Link to='/protected'>
              Link to Protected Page
          </Link>
          </li>
          <li>
            <Link to='/unprotected'>
              Link to Unprotected Page
          </Link>
          </li>
        </ul>
        <button onClick={this.props.login}>Login</button>
        <br/>
        <button onClick={this.props.logout}>Logout</button>
                <Switch>

              <Route path="/employees" component={this.props.Employee}></Route>
              <Route path="/departments" component={this.props.Department}></Route>
              <Route path="/projects" component={this.props.Project}></Route>
              <Route path="/" Component={Error}></Route>
              <Route exact path='/' component={Home}/>
              <Route path='/protected' component={Protected} />
              <Route path='/unprotected' component={Unprotected} />
              </Switch>
            </Router>
            </div>
     
        )
    }
      
}

export default RouterComp;