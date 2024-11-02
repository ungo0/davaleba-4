import React, { useEffect, useState } from "react"

export default function Card(props) {
    const [isTrue, setTrue] = useState()
    const handleClick = () => {
        if (isTrue) {
            setTrue(false)
        } else {
            setTrue(true)
        }
    }}

    


