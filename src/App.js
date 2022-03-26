import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { computeHeadingLevel } from '@testing-library/react';


function App() {

  const [selectState,setSelectState] = useState("");
  const [genState,setGenState] = useState({}); //const genState = {}



  return (
    <div>
      <select onChange={(funName)=>{setSelectState(funName.target.value)}}>
        <option>...</option>
        <option>India</option>
        <option>Pak</option>
        <option>Aus</option>
        <option>Ame</option>
      </select>
      {selectState == "..." ? <p>Select Something</p>:<p></p>}

    

      <h3>Gender</h3>
      <label>Male</label>
      <input name="gender" type="radio" value="Male" onChange={(genName)=>{console.log(genName.target.defaultValue)}}></input>
      
      <label>Fe-male</label>
      <input name="gender" type="radio" value="Female" onChange={(genName)=>{console.log(genName.target.defaultValue)}}></input>
      {/* </div> */}
      {/* <h3>Gender</h3>
      <label>Male</label>
      <input name="gender" type="radio" onChange={(genName)=>{setGenState({male : genName.target.checked})}}></input>
      
      <label>Fe-male</label>
      <input name="gender" type="radio" onChange={(genName)=>{setGenState({Female : genName.target.checked})}}></input><br></br>
      {Object.keys(genState).length == 0 ? <p>Please Select Gender</p>:""} */}
      </div>



      // how to find object is empty
      // let sampleObj = {} 
      // Object.keys(sampleObj).length
      // 0


  ); 
}

export default App;
