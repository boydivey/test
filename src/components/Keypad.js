import React, { useEffect, useState } from 'react';

// export default function Keypad() {

export default function Keypad({ usedKeys }) {
    const [letters, setLetters] = useState(null)

    useEffect(() => {
        const keyboard = {
            "letters": [
                { key: "q" },
                { key: "w" },
                { key: "e" },
                { key: "r" },
                { key: "t" },
                { key: "y" },
                { key: "u" },
                { key: "i" },
                { key: "o" },
                { key: "p" },
                { key: "a" },
                { key: "s" },
                { key: "d" },
                { key: "f" },
                { key: "g" },
                { key: "h" },
                { key: "j" },
                { key: "k" },
                { key: "l" },
                { key: "z" },
                { key: "x" },
                { key: "c" },
                { key: "v" },
                { key: "b" },
                { key: "n" },
                { key: "m" }
            ]
        };
        setLetters(keyboard.letters);
    }, []);

    return (
        <div className="keypad">
            {letters && letters.map(letter => {
                const color = usedKeys[letter.key];
                return (
                    <div key={letter.key} className={color}>{letter.key}</div>
                )
            })}
        </div>
    )
}
