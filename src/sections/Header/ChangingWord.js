import React from 'react';

const ChangingWord = ({ className }) => {
    const wordsArray = ["webapps", "websites", "stores", "UIs"]
    return (
        <span className={"overflow-hidden relative float-right h-16 -mt2.5 " + className}>
            <ul className="animate-flip">
                {wordsArray.map(word => (
                    <li className="px-2.5 h-12 mb-12 block tint">{word}</li>
                ))}
            </ul>
        </span>
    );
}

export default ChangingWord;