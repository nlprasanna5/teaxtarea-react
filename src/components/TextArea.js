import React, { useState, useEffect, useRef } from 'react';
import './textAreaStyle.css';

function TextArea() {
    const [text, setText] = useState('');
    const [remainingChars, setRemainingChars] = useState(100);
    const textAreaRef = useRef(null);

    useEffect(() => {
        textAreaRef.current.focus();
    }, []);

    function handleTextChange(event) {
        const newText = event.target.value;
        const newRemainingChars = 100 - newText.length;

        if (newRemainingChars >= 0) {
            setText(newText);
            setRemainingChars(newRemainingChars);
        }
        if (newRemainingChars === 0) {
            alert("100 characters filled");
        }

    }

    return (
        <div className="container">
            <div class="text">
                <textarea
                    ref={textAreaRef}
                    value={text}
                    onChange={handleTextChange}
                    maxLength={100}
                    rows={5}
                    cols={50}
                />
                <div className='chars'>Characters Remaining: {remainingChars}</div>
            </div>

        </div>
    );
}

export default TextArea;
