import React, { useState } from 'react'

const TextToVoce = () => {
    const [text, setText] = useState('');
    const handleSpeak = () => {
        let string = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(string)
    }
    return (
        <div className='voice'>
            <h1>Text to Voice Coverter</h1>
            <textarea placeholder='enter some text.' name="" id="" cols="30" rows="10" onChange={(e) => setText(e.target.value)}></textarea>
            <div>
                <button onClick={handleSpeak}>Speak</button>
            </div>
        </div>
    )
}

export default TextToVoce