import { useState } from "react";

export function Button() {
  
  const [counter, setCounter] = useState(0)
  
  function incremente(){	  
	  setCounter(counter+1);
	  console.log(counter);
  }  
  
  return (
    <button onClick={incremente}>
		{counter}
	</button>
  );
}