import React, { useState, useRef } from 'react'
import './counter.css'

function Counter() {
    const [input, setInput] = useState(3);
    const InputRef = useRef(null);

    const increment = () => {

        setInput(InputRef.current.value * 3);
        console.log(input);
    }

    const decrement = () => {
        setInput()

    }
    const clear = () => {
        setInput(3);
    }
    return (
        <div className="counter">
            <div>
                <h1>Counter</h1>
            </div>
            <div className="counter__content">
                <button
                    type="submit"
                /* onClick={decrement */
                >
                    -
                </button>
                <input type="text"
                    /* onChange={() => { setInput(e.target.value) }} */
                    value={input}
                    ref={InputRef}
                    placeholder="enter a number"
                />
                <button type="submit"
                    onClick={increment}
                >+</button>
                <button
                    onClick={clear}>Clear</button>
            </div>
        </div >
    )
}

export default Counter
