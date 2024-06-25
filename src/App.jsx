
import { useState } from 'react';
import './App.css';

function App() {

const [counter,setCounter]=useState(0)

function incrementCounter(){
  setCounter(counter+1)
}
function decrementCounter(){
  if(counter!=0){
    setCounter(counter-1)
  }
}

function resetCounter(){
  setCounter(0)
}

  return (
    <>
   <div class="card" style={{display:'flex',alignItems:'center'}}>
  <div className="card-body">
    <h5 className="card-title text-center">counter app</h5>
   
   <h1 className='mb-4 mt-3 text-center'>{counter}</h1>
  
    <button onClick={incrementCounter} type="button" className="btn btn-primary ms-2">increment</button>
    <button onClick={decrementCounter} type="button" className="btn btn-warning ms-2">decrement</button>
    <button onClick={resetCounter} type="button" className="btn btn-dark ms-2">reset</button>
   
  </div>
</div>
    </>
  );
}

export default App;
