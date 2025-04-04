export function Phrase({ phrase, currentIndex }) {
    let words = phrase.split(" ");
    const spacedWords = [];
    for (let i = 0; i < words.length; i++) {
        spacedWords.push(i < words.length - 1 ? words[i] + " " : words[i]);
    }
    let globalIndex = 0; // Track the global letter position

    return (
        <div className="phrase-container">
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