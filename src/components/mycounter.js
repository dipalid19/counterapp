import { useState } from "react";

let Mycounter=()=>{

    let [num1, setcount]=useState(2)
    let increment=()=>{
     // let result= 
     setcount(num1+1);
      //if(result%2==0){
    //     document.write('Even');
      //}
    //  else{
      //  document.write('Odd'); 
      //}
    }
    let decrement=()=>{
        setcount(num1-1);
     }
  return<>
  <h1>{num1}</h1>
  <button  onClick={increment}>INC</button>
  <button onClick={decrement}>DEC</button>

  </>
}
export default Mycounter;