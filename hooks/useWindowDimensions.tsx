import { useState, useEffect } from 'react'

interface dimentionModel {
    width: number
    height: number
}

function useWindowDimensions() {
    const [dimensions, setDimensions] = useState<dimentionModel>({
        width: 0,
        height: 0,
    })

    useEffect(() => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }, [])

    return dimensions
}

export default useWindowDimensions
