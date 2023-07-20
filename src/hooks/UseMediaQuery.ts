import { useState, useEffect } from "react";


const useMediaQuery = (query: string): boolean => {

    const [matches, setMatches] = useState<boolean>(false)

    
    useEffect(() => {
        const media: MediaQueryList = window.matchMedia(query)
        if (media.matches !== matches) {
            setMatches(media.matches)
        }
        const listenToResize = () => setMatches(media.matches)

        window.addEventListener("resize", listenToResize)
        return () => window.removeEventListener("resize", listenToResize)

    }, [matches, query])

    return matches
}

export default useMediaQuery;