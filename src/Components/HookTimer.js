import React, { useState, useEffect, useRef } from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(()=>{
        intervalRef.current = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000); 
        return ()=>{
            clearInterval(intervalRef.current)
        }
        
    },[])
  return (
    <div>
        Timer - {timer}  &nbsp;
        <button onClick={()=> clearInterval(intervalRef.current)} >Clear</button>
    </div>
  )
}

export default HookTimer