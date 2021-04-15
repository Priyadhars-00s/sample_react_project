import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
// import Employee from './employee';
// import Department from './department';
// import Project from './project';
import RouterComp from './component/router';
import { Grid } from "@material-ui/core";
import CreateData from "./component/CreateData"
import DataLists from "./component/DataList";
import Header from "./component/Header";
import Crud from "./component/Crud";

function App() {
  return(
    <div>
        
        <RouterComp />
        <Header />
        <Crud />
        
            
    </div>
      
  );
}

export default App;