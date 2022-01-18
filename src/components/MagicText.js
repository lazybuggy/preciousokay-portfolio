import "./styles/Shared.css";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

function MagicText({
    words,
  }) {
    const textRef = useRef();

    useEffect(() => {
       gsap.to(textRef.current.children,{opacity: 1,delay: 1, stagger: 0.5})
      }, []);

      return (
        <div className="magicRoot">
            <p>I am a:</p>
            <div ref={textRef}>
            {words.map(word => <p className="magicText">{word}</p>)}
            </div>
        </div>
      );
    }
    
    export default MagicText;
    