import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, NavLink, Switch, Route, Redirect} from 'react-router-dom';

const authentication={
  isLoggedIn:false,
  onAuthentication(){
    this.isLoggedIn=true;
  },
  getLogInStatus(){
    return this.isLoggedIn;
  }
}
function SecuredRoute(props){
  return(
    <Route path={props.path} render={data=>authentication.getLogInStatus()?(
      <props.component {...data}></props.component>):
      (<Redirect to={{pathname:'/'}}></Redirect>)}></Route>
  )
}
function LogIn(props){
  const [loginData,setLoginData]=useState({username:'',password:''});
}
  function changeLogInData(e){
    setLoginData({...loginData,[e.target.name]:e.target.value});
  }
  const onLogIn=()=>{
    fetch('Test.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
        .then(function(myJson) {
        console.log(myJson);
        loginData(myJson)
      })
      .then(result=>{
        if(result){
          authentication.onAuthentication();
          props.history.push('/home')
        }
        else{
          alert('Invalid UserName or PassWord');
        }
      });
    }

  
//   function onLogIn(){
//     // fetch("https://localhost:44306/api/Test",{
//     //   method:'POST',
//     //   headers:{'Content-type':'application/json'},
//     //   body:JSON.stringify(loginData)
//     // }).then(r=>r.json())
//     getJSON('Test.json')
// .then(data => data.json())
// .then(json => console.log(json))
   

  return(
    <div>
      <h2>Welcome to LogIn...</h2>
      <p>
        <label>UserName : <input type="text" value={loginData.username} 
                          name="username" onChange={changeLogInData}></input></label>
      </p>
      <p>
        <label>PassWord : <input type="text" value={loginData.password} 
                          name="password" onChange={changeLogInData}></input></label>
      </p>
      <button onClick={onLogIn}>LogIn</button>
    </div>
  )


function Home(props){
  function onNext(){
    props.history.replace('/editprofile');
  }
  return(
    <div>
      <h2>Welcome to Home...</h2>  
      <button onClick={onNext}>Next</button>    
    </div>
  );
}
function EditProfile(){
  return(
    <div>
      <h2>Welcome to Edit Profile...</h2>
    </div>
  );
}

function App(){
  return(
    <div>
      <h2>Welcome to App Component...</h2>
      <Link to="/">LogIn</Link>&nbsp;&nbsp;
      <NavLink to="/home" activeClassName="testClass">Home</NavLink>&nbsp;&nbsp;
      <NavLink to="/editprofile" activeClassName="testClass">Edit Profile</NavLink>
      
      <Switch>
        <Route exact path="/" component={LogIn}></Route>
        <SecuredRoute  path="/home" component={Home}></SecuredRoute>
        <SecuredRoute  path="/editprofile" component={EditProfile}></SecuredRoute>
      </Switch>
      
    </div>
  )
}

ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>,
  document.getElementById("root"));