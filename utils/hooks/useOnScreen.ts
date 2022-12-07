import React, { useState, useEffect, useRef } from "react"

export default function useOnScreen(ref: React.RefObject<HTMLDivElement>) {

    if (ref === null) return false;
    const [isIntersecting, setIntersecting] = useState(false)

    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    )

    useEffect(() => {
        //@ts-ignore
        observer.observe(ref.current)
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    }, [])


    return isIntersecting
}