import React from 'react';
import { useState, useEffect } from "react";

function Department() {
    

      return (
        <div>
          <h2>Departments Data...</h2>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
              </tr>
            </thead>
            {/* <tbody>
            {departments.map(d => (
              <tr key={d.Id}>
                <td>{d.Id}</td>
                <td>{d.Name}</td>
                </tr>
            ))}
            </tbody> */}
          </table>
        </div>
        );
}

export default Department

