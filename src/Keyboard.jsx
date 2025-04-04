import { Key } from './Key';

// This component renders a keyboard layout with keys that can be pressed.
const keyLayout = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
    ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"],
    ["Space"]
];

// Mapping for shift key to its corresponding character
const shiftKeyLayout = [
    ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"],
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\""],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "Shift"],
    ["Space"]
];

export function Keyboard({ keysPressed, nextLetter }) {
    // Determine if the Shift key is pressed to determine the layout
    const layout = keysPressed.has("Shift") ? shiftKeyLayout : keyLayout;
    return (
        <div className="keyboard-container">
            <div className="keyboard">
                {layout.map((row, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {row.map((keyLabel, keyIndex) => (
                            <Key
                                key={`${keyLabel}-${rowIndex}-${keyIndex}`}
                                label={keyLabel}
                                keysPressed={keysPressed}
                                nextLetter={nextLetter}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}