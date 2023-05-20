
import { useEffect, useState } from 'react';
import './App.css';


/*

Component will always return the jsx whereas the function will return 
the value or variable

below inside the App component it means reuse the component and dynamically change all
the name at a time


*/

function App() {
  const [state, setState] = useState("kalil")
  return (
    <div className="App">
      <Basic 
      name={state}
      />
      <Basic 
      name={state}
      />
      <Basic 
      name={state}
      />
      <Basic 
      name={state}
      />

      <button onClick={()=> setState("New Name from component")}>Change new Name</button>

    </div>
  );
}

/*

Life cycle of the components : 
1. Initialization (states and props)
2. Mounting (Inside the components the operations which is going to happen it will
             mount the some operations)
3. updation - it will update the props and state after mounting 
4. unmounting - components that go away 


useEffect : 
- useEffect is a react hook
syntax :
useEffect(()=>{}, []) -> this is a function with the dependency array



example : 

function Basic({name}){
  
  const [show, setShow] = useState(true);

  //Mounting - if the dependency array is empty it will work or execute only one time
  // but its not empty it will continuously
  useEffect(()=>{
    console.log("I'm Mounted", show)
  }, [show])


  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setShow(!show)}>Change Name</button>
    </div>
  )
}

******** Most important *****************
Need to understand the useState and useEffect - read carefully
....................................................

statefull component : 

component were it contains the state

function App() {
  const [state, setState] = useState("kalil")
  return (
    <div className="App">
      <Basic 
      name={state}
      />
    </div>
  );
}

export default App;

stateless component :

components were doesnot contains the state, even props can be present

function Basic({name}){
  
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setShow(!show)}>Change Name</button>
    </div>
  )
}
..............................................

*/


export default App;

function Basic({name}){
  
  const [show, setShow] = useState(true);

  //Mounting - if the dependency array is empty it will work or execute only one time
  // but its not empty it will continuously
  useEffect(()=>{
    console.log("I'm Mounted", show)
  }, [show])


  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setShow(!show)}>Change Name</button>
    </div>
  )
}
