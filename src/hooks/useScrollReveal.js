import { useEffect, useRef, useState } from "react";

function useScrollReveal () {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        });

        if(ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            observer.disconnect();
        }; 

    }, []);

    return {ref, isVisible};

}

export default useScrollReveal;