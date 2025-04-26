import { useActionState, useState } from "react";
import "./style.css"

function App(){

    const [x, setx]=useState(0);
    return(
        <>
            <div>
                <h1>Feedback Form</h1>

                <input placeholder="Enter your name" type="text"/>
                <button onClick={() => setx((x) => x + 1)}/>
            </div>

            <div>
            
            </div>
        </>
    );
}

export default App;