import React from "react";

import { observable } from "mobx";
import { observer } from "mobx-react";

const person = observable({
    name: "Michel",
    age: 33
  });
  function updateName(name) {
    person.name = name;
  }
  
   function becomeOlder() {
    person.age++;
  }
const MobxApp = observer(function App() {
    return (
      <div className="App">
        <h1>
          Hello {person.name} ({person.age})
        </h1>
        <input
          onChange={e => {
            updateName(e.target.value);
          }}
          value={person.name}
        />
        <br />
        <button onClick={becomeOlder}>Older</button>
        <hr />
      </div>
    );
  });


export default MobxApp;
