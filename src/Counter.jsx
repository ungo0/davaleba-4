import { useState } from "react"

export default function Counter() {
    const [counter, setCounter] = useState(0);
    const handleClick = () => {
        console.log('+1');

        setCounter(Number(counter + 1));
    }

    const descrement = () => {
        setCounter(Number(counter - 1))
    }
    return (
        <>
            <div>
                <button onClick={() => handleClick()}>
                    increment
                </button>

                <button onClick={() => descrement()}>
                    descrement
                </button>

                <h1>
                    counter: {counter}
                </h1>
            </div>
        </>
    )
}