import Bro from "../components/Bro";
import { useState } from "react";

export default function BroPage() {
  const [bro, setBro] = useState(1)
  const broArray = []
  for (let index = 0; index < bro; index++) {
    broArray.push(<Bro key={index}/>)
    
  }
  return (
    <>
        <button onClick={() => setBro(bro - 1)}>-</button>
        <button onClick={() => setBro(bro + 1)}>+</button>
        <div>{broArray.map(bro => bro)}</div>
    </>
  );
}
