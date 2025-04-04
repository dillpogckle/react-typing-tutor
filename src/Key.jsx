export function Key({ label, keysPressed, nextLetter, shiftKeyMap  }) {

    // Check if the Shift key is pressed
    const isShiftActive = keysPressed.has("Shift");
    // Change space character to "Space" for comparison
    const labelCheck = label === "Space" ? " " : label;

    // Check if the key is active based on the pressed keys
    const isActive = label === "Shift"
        ? isShiftActive
        : keysPressed.has(isShiftActive ? labelCheck.toUpperCase() : labelCheck);

    // Logic for shift key
    let shiftKeyRequired = (/[a-zA-Z]/).test(nextLetter)
        ? nextLetter === nextLetter.toUpperCase()
        : Object.values(shiftKeyMap).includes(nextLetter)


    // Logic for next key
    const isNext = nextLetter === ""
        ? false
        : nextLetter === " "
            ? labelCheck === nextLetter
            : labelCheck === (!isShiftActive && shiftKeyRequired ? "Shift" : nextLetter);

    // Display the label in uppercase if Shift is active and the label is not "Space" or "Shift"
    const displayLabel = isShiftActive && label !== "Space" && label !== "Shift" ? label.toUpperCase() : label;

    return (
            <div className={`key ${label.toLowerCase()}-key ${isActive ? "active" : ""} ${isNext ? "next-key" : ""}`}>
                {displayLabel}
            </div>
    );
}