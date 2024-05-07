import React, { useState} from 'react'

function App() {
  
  return (
 <> 
 <Hello name={Final}/>
 <Right name={Final}/>
 <Yellow name={Final}/>
 <h1>hello</h1>
 <h1>hello</h1>


  </>
 )
     function Hello(props) {
  return <h2 style={{background:"red",height:"200px"}}><props.name/></h2>
}
function Right(props) {
  return <h2 style={{background:"green",height:"200px"}}><props.name/></h2>
}
function Yellow(props) {
  return <h2 style={{background:"yellow",height:"200px"}}><props.name/></h2>
}

<h1>hello</h1>

function Final()
{
    const[count,setCount]=useState(0);
    return(
        <div>
        
          <h1>{count}</h1><br/>
          <button onClick={()=>{setCount(count+1*2)}}>Click</button>
        </div>
    )
}

  
}
export default App;
