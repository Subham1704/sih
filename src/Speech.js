// src/SpeechRecognition.js
import React, { useEffect, useState } from 'react';
import welcome from "./welcome.gif";
import hello from './hello.gif';
import './index.css';
const Speech = () => {
    const [transcript, setTranscript] = useState('');
    const [avatar,setAvatar]=useState(hello)
    const handleStartListening = () => {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onresult = (event) => {
            const speechToText = event.results[0][0].transcript;
            setTranscript((prev) => prev + speechToText + ' ');
        };

        recognition.onerror = (event) => {
            console.error('Error occurred in recognition:', event.error);
        };

        recognition.start();
    };
    useEffect(()=>{
        if(transcript==='hello'){
            setAvatar(hello)
        }


        // else if(transcript==='a'){
        //     setAvatar(a)
        // }
        // else if(transcript==='b'){
        //     setAvatar(b)
        // }
        // elseif(transcript==='c'){
        //     setAvatar(c)
        // }


    },[transcript])

    return (
        <div>
            <div>
                {/* <h1>Speech Recognition to Text</h1> */}
                <button className='button' onClick={handleStartListening}>Start Listening</button>
                <textarea
                    value={transcript}
                    rows="2"
                    cols="50"
                    placeholder="Your speech will appear here..."
                    readOnly
                />
            </div>
            <div>
            <img
                src={avatar}
                alt="loading..."
                style={{ marginTop: 100, height: 500 }}
            />
            </div>
        </div>
    );
};

export default Speech;
