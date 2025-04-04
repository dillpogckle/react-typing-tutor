export function Key({ label, keysPressed, nextLetter }) {

    // Check if the Shift key is pressed
    const isShiftActive = keysPressed.has("Shift");
    // Change space character to "Space" for comparison
    const labelCheck = label === "Space" ? " " : label;

    // Check if the key is active based on the pressed keys
    const isActive = isShiftActive ?
        (label === "Shift" ? isShiftActive : keysPressed.has(labelCheck.toUpperCase())) :
        keysPressed.has(labelCheck);

    // Check if the next letter is the same as the current key label, Also handles if the letter being processed is an empty string
    const isNext = nextLetter === ""
        ? false
        : nextLetter === " "
            ? labelCheck === nextLetter
            : labelCheck === (isShiftActive || nextLetter !== nextLetter.toUpperCase() ? nextLetter : "Shift");

    // Display the label in uppercase if Shift is active and the label is not "Space" or "Shift"
    const displayLabel = isShiftActive && label !== "Space" && label !== "Shift" ? label.toUpperCase() : label;

    return (
            <div className={`key ${label.toLowerCase()}-key ${isActive ? "active" : ""} ${isNext ? "next-key" : ""}`}>
                {displayLabel}
            </div>
    );
}