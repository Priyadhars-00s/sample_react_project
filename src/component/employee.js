import React from 'react';
import { useState, useEffect } from "react";
//import { post, axios } from "./post";

function Employee() {
    const [employees,setEmployees]=useState([]);
    useEffect(()=> {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(
          (result) => {
            setEmployees(result);
          }
        );
    }); 
       
          return (
        <div>
          <h2>Employees Data...</h2>
          <table>
            <thead>
              <tr>
                <th>UserId</th>
                <th>Id</th>
                <th>title</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
            {employees.map(emp => (
              <tr key={emp.Id}>
                <td>{emp.UserId}</td>
                <td>{emp.Id}</td>
                <td>{emp.title}</td> 
                 <td>{emp.completed}</td>
                </tr>
            ))}
            </tbody> 
          </table>
        </div>
        );
            }


export default Employee