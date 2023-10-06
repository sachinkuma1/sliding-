import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
const data=["sachin", "suraj", "prasad","asif"];




function App() {

  const next=()=>{
    const newindex=(index+1)%data.length;
     setIndex(newindex);
  }

  const prev=()=>{
    const newdata=(index-1+data.length)%data.length;
    setIndex(newdata);
  }
  

  const [index, setIndex]=useState(0);

  // const naam=data[index].name;
  return (
    <div className="App">
    <p>{data[index]}</p>
      <button  onClick={next}>
      <FaChevronLeft/>
      </button>
      <button onClick={prev}>
      <FaChevronRight/>
      </button>
    
    </div>
  );
}

export default App;
