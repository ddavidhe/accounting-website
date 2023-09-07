// components/home.js
import React from 'react';

function Home() {
    
    const whitespaceStyle = {
        height: '100vh', // This sets the element's height to 100 viewport heights
        backgroundColor: 'white', // This makes the whitespace visible as a white background
    };

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>
                This is some content that will make the page longer and allow you to test scrolling.
                You can add more content here to further extend the page.
            </p>
            <div style={whitespaceStyle}></div>
            <p>
                ok
            </p>
        </div>
    );
}

export default Home;
