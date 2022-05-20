import React, {useRef, useEffect} from "react";


export function useOutsideAlerter(ref: any, outsideHandler: () => void) {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                outsideHandler()
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export default function OutsideAlerter(props: any) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, props.outsideHandler);
    return <div ref={wrapperRef}>{props.children}</div>;
}