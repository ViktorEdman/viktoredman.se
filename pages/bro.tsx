import Bro from "../components/Bro";
import { useState } from "react";

export default function BroPage()  {
    const [bro, setBro] = useState(1)
    const broArray = []
    for (let index = 0; index < bro; index++) {
        broArray.push(<Bro key={index} />)

    }
    return (
        <>
            <button onClick={() => setBro(bro - 1)}>-</button>
            <button onClick={() => setBro(bro + 1)}>+</button>
            <div>Current bro count: {bro}</div>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                width: "60%",
                justifyContent: "center"
            }}>
                {broArray.map(bro => <div
                    key={bro.key}
                    style={{
                        
                    }}
                >{bro}</div>)}
            </div>
        </>
    );
}
