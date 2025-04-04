import { Keyboard } from './Keyboard'
import { Phrase } from "./Phrase.jsx";
import {useEffect, useState} from "react";


// Mapping since toUpperCase() doesn't work for all keys
const shiftKeyMap = {
    "1": "!",
    "2": "@",
    "3": "#",
    "4": "$",
    "5": "%",
    "6": "^",
    "7": "&",
    "8": "*",
    "9": "(",
    "0": ")",
    "-": "_",
    "=": "+",
    "[": "{",
    "]": "}",
    "\\": "|",
    ";": ":",
    "'": "\"",
    ",": "<",
    ".": ">",
    "/": "?",
    "`": "~"
};

// Sample phrases for the typing test
const phrases = [
    "The quick brown fox jumps over the lazy dog",
    "Practice makes perfect, so keep typing",
    "Coding is fun when you challenge yourself",
    "Never give up on learning new skills",
    "A journey of a thousand miles begins with a single step",
    "Type fast but also type accurately",
    "Shortcuts can save time, but accuracy matters more",
    "Stay focused and keep improving every day",
    "Speed is important, but precision is key",
    "Mastering the keyboard is a valuable skill"
];

export function App() {
    // State variables to manage the current phrase index, keys pressed, current key, phrase, and current index
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [keysPressed, setKeysPressed] = useState(new Set());
    const [currentKey, setCurrentKey] = useState(null);
    const [phrase, setPhrase] = useState(phrases[currentPhraseIndex]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Effect to handle keydown and keyup events
    useEffect(() => {
        function keydown(e) {
            if (e.repeat) return;
            setKeysPressed(prevKeys => new Set([...prevKeys, e.key]));
            setCurrentKey(e.key);
        }

        function keyup(e) {
            // This is a little complicated but set up so keys don't get stuck "down" when still pressed when Shift is lifted
            setKeysPressed(prevKeys => {
                const newKeys = new Set(prevKeys);
                newKeys.delete(e.key);
                newKeys.delete(e.key.toLowerCase());
                newKeys.delete(e.key.toUpperCase());
                if (e.key in shiftKeyMap) {
                    newKeys.delete(shiftKeyMap[e.key]);
                }
                const reverseShiftKeyMap = Object.keys(shiftKeyMap).find(key => shiftKeyMap[key] === e.key);
                if (reverseShiftKeyMap) {
                    newKeys.delete(reverseShiftKeyMap);
                }
                return newKeys;
            });
            setCurrentKey(null);
        }

        window.addEventListener("keyup", keyup);
        window.addEventListener("keydown", keydown);

        // Cleanup function to remove event listeners
        return () => {
            window.removeEventListener("keydown", keydown);
            window.removeEventListener("keyup", keyup);
        };
    }, []);

    // Effect to check if the current key matches the next letter in the phrase
    useEffect(() => {
        if (currentKey && currentKey === phrase[currentIndex]) {
            setCurrentIndex(currentIndex + 1);
        }
    }, [currentKey, phrase, currentIndex]);

    const nextLetter = currentIndex < phrase.length ? phrase[currentIndex] : '';

    // Effect to check if the current phrase is complete and move to the next one
    useEffect(() => {
        console.log("Current index: ", currentIndex);
        if (currentIndex === phrases[currentPhraseIndex].length) {
            console.log("Phrase complete");
            if (currentPhraseIndex < phrases.length - 1) {
                setCurrentPhraseIndex(prevIndex => prevIndex + 1);
                setCurrentIndex(0);
            }
        }
    }, [currentIndex, currentPhraseIndex]);

    // Effect to update the phrase when the current phrase index changes
    useEffect(() => {
        setPhrase(phrases[currentPhraseIndex]);
    }, [currentPhraseIndex]);

    return (
        <div>
            <Phrase phrase={phrase} currentIndex={currentIndex} />
            <Keyboard keysPressed={keysPressed} nextLetter={nextLetter} />
        </div>
    );
}