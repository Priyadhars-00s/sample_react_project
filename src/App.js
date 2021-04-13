import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import Employee from './employee';
import Department from './department';
import Project from './project';
import RouterComp from './router';

function App() {
  return(
    <div>
        
        <RouterComp />
        
            
    </div>
      
  );
}

export default App;