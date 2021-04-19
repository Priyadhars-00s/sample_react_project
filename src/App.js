import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
// import Employee from './employee';
// import Department from './department';
// import Project from './project';
import RouterComp from './component/router';
import { Grid } from "@material-ui/core";
import CreateData from "./component/CRUD/CreateData"
import DataLists from "./component/CRUD/DataList";
import Header from "./component/CRUD/Header";
import Crud from "./component/CRUD/Crud";
import Employee from './component/APIcalls/employee';
import PersonList from './component/getPost';
import Authenticate from './component/Authentication/authenticate';
import Store from './Mobx and Redux/MobxStore';
import { observer } from 'mobx-react';
import MobxApp from './Mobx and Redux/Mobx';
import ReduxApp from './Mobx and Redux/Redux';

function App() {
  return(
    <div>
        
         <RouterComp />
        <Header />
        <Crud /> 
         <Employee />   
         <PersonList />
          <Authenticate /> 
          <Store />
         <MobxApp />
          <ReduxApp />
        
            
    </div>
      
  );
}

export default App;