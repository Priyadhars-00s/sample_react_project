import React from "react";
import { useLocalStore, useObserver } from "mobx-react";
//import { observer } from "mobx-react"

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    bugs: ["Centipede"],
    addBug: bug => {
        console.log("bug",bug)
      store.bugs.push(bug);
          
    },
    deleteBug: bug =>{
        console.log("bug",bug)
        store.bugs.splice(bug);
    },
    get bugsCount() {
      return store.bugs.length;
    }
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const BugsHeader = () => {
  const store = React.useContext(StoreContext);
  return useObserver(() => <h1>{store.bugsCount} Bugs!</h1>);
};

const BugsList = () => {
  const store = React.useContext(StoreContext);

  return useObserver(() => (
    <ul>
      {store.bugs.map(bug => (
        <li key={bug}>{bug}</li>
      ))}
    </ul>
  ));
};

const BugsForm = () => {
  const store = React.useContext(StoreContext);
  const [bug, setBug] = React.useState("");

  return (
    <form
      onSubmit={e => {
        store.addBug(bug);
        setBug("");
        e.preventDefault();
      }}
     
    >
      <input
        type="text"
        value={bug}
        onChange={e => {
          setBug(e.target.value);
        }}
      />
      <button type="submit">Add</button>
         </form>
  );
};

const DeleteForm = () => {
    const store = React.useContext(StoreContext);
    const [bug] = React.useState("");
  
    return (
      <form
        onSubmit={e => {
           store.deleteBug(bug);
          e.preventDefault();
        }}
             >
              <button type="submit">Delete</button>
      </form>
    );
  };

export default function Store() {
  return (
    <StoreProvider>
      <main>
        <BugsHeader />
        <BugsList />
        <BugsForm />
        <DeleteForm />
      </main>
    </StoreProvider>
  );
}