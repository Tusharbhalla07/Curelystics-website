import React, { useEffect, useRef } from 'react'

// Lightweight CountUp component using requestAnimationFrame
export default function CountUp({ from = 0, to, duration = 1500, separator=',' , decimals=0 }){
  const ref = useRef(null)
  const startRef = useRef(null)

  useEffect(()=>{
    let raf
    const start = performance.now()
    function tick(now){
      if(!startRef.current) startRef.current = now
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const value = from + (to - from) * progress
      const formatted = Number(value).toLocaleString(undefined, {maximumFractionDigits: decimals, minimumFractionDigits: decimals})
      if(ref.current) ref.current.textContent = formatted
      if(progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return ()=> cancelAnimationFrame(raf)
  },[from,to,duration,decimals])

  return <span ref={ref}>{from}</span>
}
