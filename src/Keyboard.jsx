import { Key } from './Key';


const keyLayout = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
    ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"],
    ["Space"]
];


export function Keyboard() {


    return (
        <div className="keyboard-container">
        <div className="keyboard">
            {keyLayout.map((row, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {row.map((keyLabel, keyIndex) => (
                        <Key label={keyLabel} key={keyIndex}/>
                    ))}
                </div>
            ))}
        </div>
        </div>

    );
}