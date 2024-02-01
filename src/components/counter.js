import { useState } from "react"

let Counter=()=>{
    let [count,setnewcount]= useState(10);
    let setcount=()=>{
        setnewcount(count+1);
    }
    let deccount=()=>{
        setnewcount(count-1);
    }

    return<>
    <center>
     <h1>{count}</h1>
     <button onClick={setcount}>INC</button>
     <button onClick={deccount}>DEC</button>
     </center>
    </>
}
export default Counter