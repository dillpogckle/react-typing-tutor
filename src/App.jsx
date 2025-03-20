import { Keyboard } from './Keyboard'
import { Phrase } from "./Phrase.jsx";
import {useEffect, useState} from "react";

export function App() {
    const [keyPressed, setKeyPressed] = useState(null)
    
    useEffect(() => {
        function keydown(e) {
            if (e.repeat) return;
            setKeyPressed(e.key)
        }
        function keyup(e) {
            setKeyPressed(null)
        }

        window.addEventListener("keyup", keyup);
        window.addEventListener("keydown", keydown);

        return () => {
            window.removeEventListener("keydown", keydown);
            window.removeEventListener("keyup", keyup);
        };
    }, []);
    return (
        <div>
            <Phrase />
            <Keyboard />
        </div>
    )
}