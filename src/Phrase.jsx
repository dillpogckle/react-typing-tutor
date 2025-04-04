export function Phrase({ phrase, currentIndex }) {
    // Split the phrase into words and add a space after each word except the last one
    let words = phrase.split(" ");
    const spacedWords = [];
    for (let i = 0; i < words.length; i++) {
        spacedWords.push(i < words.length - 1 ? words[i] + " " : words[i]);
    }
    // Global index to track the position of letters across all words I tried using an Effect but it was rendering too late,
    // so I decided to use a global variable instead, I'm sure there's a better way to do this but I couldn't find it
    let globalIndex = 0;

    return (
        // Container for the phrase
        <div className="phrase-container">
            {/* Map through each word and split it into letters */}
            {spacedWords.map((word, wordIndex) => (
                <span key={wordIndex} className="word">
                    {word.split("").map((letter, letterIndex) => {
                        let className = "";

                        if (globalIndex < currentIndex) {
                            className = "typed";
                        } else if (globalIndex === currentIndex) {
                            className = "next";
                        } else {
                            className = "not-typed";
                        }

                        globalIndex++;

                        return (
                            <span key={letterIndex} className={className}>
                                {letter}
                            </span>
                        );
                    })}
                </span>
            ))}
        </div>
    );
}