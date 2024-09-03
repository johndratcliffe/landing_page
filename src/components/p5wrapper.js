import React, { useRef, useEffect } from 'react'
import p5 from 'p5'

const P5Wrapper = ({ sketch, input }) => {
    const p5ContainerRef = useRef()
    const p5InstanceRef = useRef()

    useEffect(() => {
        p5InstanceRef.current = new p5(sketch, p5ContainerRef.current)
        return () => p5InstanceRef.current.remove()
    }, [sketch])

    return <div ref={p5ContainerRef} />
}

export default P5Wrapper
