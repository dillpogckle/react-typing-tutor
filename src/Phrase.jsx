export function Phrase({ phrase, currentIndex }) {
    return (
        <div className="phrase-container">
            {phrase.split('').map((letter, index) => {
                let className = '';
                if (index < currentIndex) {
                    className = 'typed';
                } else if (index === currentIndex) {
                    className = 'next';
                } else {
                    className = 'not-typed';
                }
                return (
                    <span key={index} className={className}>
                        {letter}
                    </span>
                );
            })}
        </div>
    );
}