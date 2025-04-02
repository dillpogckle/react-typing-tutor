export function Key({ label, keysPressed, nextLetter }) {

    const isShiftActive = keysPressed.has("Shift");
    const labelCheck = label === "Space" ? " " : label;

    const isActive = isShiftActive ?
        (label === "Shift" ? isShiftActive : keysPressed.has(labelCheck.toUpperCase())) :
        keysPressed.has(labelCheck);

    const isNext = nextLetter === ""
        ? false
        : nextLetter === " "
            ? labelCheck === nextLetter
            : labelCheck === (isShiftActive || nextLetter !== nextLetter.toUpperCase() ? nextLetter : "Shift");

    const displayLabel = isShiftActive && label !== "Space" && label !== "Shift" ? label.toUpperCase() : label;

    return (
            <div className={`key ${label.toLowerCase()}-key ${isActive ? "active" : ""} ${isNext ? "next-key" : ""}`}>
                {displayLabel}
            </div>
    );
}