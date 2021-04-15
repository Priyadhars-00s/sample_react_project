import React from 'react';
import { useState, useEffect } from "react";
import { get, post, axios } from "react";

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

    useEffect(() => {
      const setAppState = async () => 
       ({ loading: true });
      const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
      axios.get(apiUrl).then((repos) => {
        const allRepos = repos.data;
        setAppState({ loading: false, repos: allRepos });
      });
      setAppState();
    }, []);

    onclick = () => {

      var path = 'https://jsonplaceholder.typicode.com/posts'
  
        var datas = 
          {
            "userId": 1,
            "id": 100,
            "title": "Hate",
            "body": "Reason for Hate"
            }
      var Post = post(path, datas)
            
       }
  // const [employees,setEmployees]=useState([]);
  //   useEffect(()=> {
  //     fetch("./data.json")
  //       .then(res => res.json())
  //       .then(
  //         (result) => {
  //           setEmployees(result);
  //         }
  //       );
  //   });
  
      return (
        <div>
          <h2>Employees Data...</h2>
          <table>
            <thead>
              <tr>
                <th>UserId</th>
                <th>Id</th>
                <th>title</th>
                <th>completed</th>
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
          <button className="btn btn-primary" onClick={this.onclick}>Post data</button>
        </div>
        );
}

export default Employee

// import React from 'react';
// import { useState, useEffect } from "react";

// function Employee() {
    
//   const [employees,setEmployees]=useState([]);
//     useEffect(()=> {
//       fetch("https://localhost:44306/api/Employee")
//         .then(res => res.json())
//         .then(
//           (result) => {
//             setEmployees(result);
//           }
//         );
//     });
  
//       return (
//         <div>
//           <h2>Employees Data...</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>Id</th>
//                 <th>Name</th>
//                 <th>Location</th>
//                 <th>Salary</th>
//               </tr>
//             </thead>
//             <tbody>
//             {employees.map(emp => (
//               <tr key={emp.Id}>
//                 <td>{emp.Id}</td>
//                 <td>{emp.Name}</td>
//                 <td>{emp.Location}</td>
//                 <td>{emp.Salary}</td>
//                 </tr>
//             ))}
//             </tbody>
//           </table>
//         </div>
//         );
// }

// export default Employee