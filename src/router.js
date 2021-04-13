import React, {useState, Component} from 'react';
import ReactDOM from 'react-dom';
import {Link, Switch, Router, Route} from 'react-router-dom';
import Employee from './employee';
import Department from './department';
import Project from './project';
import Error from './error';
import Protected from './protected';
import Unprotected from './unprotected';
import Home from './homepage';

function App() {
    const[isAutheticated, setisAutheticated] = useState(false);
    // onEnter = (e) => {
    //     if (e.key === 'Enter') {
    //       e.preventDefault()
    //     }
    //   };
//   onKeyPress={this.onEnter}
   login = (e) => {
    e.setisAutheticated(true);
    console.log("loggedInUser:" + isAutheticated)
  };
  onkeypress={login}

//   function logout(){
//     setisAutheticated(false);
//     console.log("loggedInUser:" + isAutheticated)
//   }
// }
 logout = (e) => {
    e.setisAutheticated(false);
    console.log("loggedInUser:" + isAutheticated)
  };
  onkeypress={logout}
  
class RouterComp extends Component {
    constructor(props){
        super(props)
       
        console.log(this.props)
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
        <button onClick={this.login}>Login</button>
        <br/>
        <button onClick={this.logout}>Logout</button>
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
}
export default RouterComp;