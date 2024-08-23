// components/About.js
import React, {useEffect} from 'react';

const About = () => {

    useEffect(() => {
        document.title = 'About Page'; // Set the page title
    }, []);

    return (
        <div>
            <h1>About Us</h1>
            <h3>Get a Bot by clicking help button for quick assistance to user</h3>
            <button id="help">help PX context deploy learning</button>
            <button>Button B</button>
            <button>Button C</button>
            <button>Button D</button>
        </div>
    );
};

export default About;
