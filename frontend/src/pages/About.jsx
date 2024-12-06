import React from 'react';


const About = () => {
    return (
        <div className="about-container" id='about'>
            <hr></hr>
            <h1>About Our Note-Taking App</h1>
            <p>
                Welcome to our note-taking app! This application is designed to help you
                capture, organize, and manage your notes effortlessly. Whether you're jotting down a quick idea
                or keeping track of important information, our app is here to make the process seamless and stress-free.
            </p>
            <h2>Why Choose Our App?</h2>
            <ul>
                <li>
                    <strong>Minimalistic Design:</strong> 
                    We believe in keeping things simple. Our app focuses solely on what matters most—taking and managing your notes.
                </li>
                <li>
                    <strong>Easy-to-Use Interface:</strong> 
                    The intuitive design ensures that you can start creating notes instantly without any unnecessary distractions.
                </li>
                <li>
                    <strong>Core Features Only:</strong> 
                    Our app avoids overwhelming you with extra features, allowing you to focus on creating, editing, and deleting notes efficiently.
                </li>
            </ul>
            <h2>Features</h2>
            <ul>
                <li>Create notes with a title and body content.</li>
                <li>Edit notes to keep your information up-to-date.</li>
                <li>Delete notes you no longer need.</li>
                <li>Smooth and responsive user experience across all devices.</li>
            </ul>
            <p>
                This app is perfect for users who value simplicity and efficiency in their productivity tools. 
                By focusing on the essential functions, we provide a distraction-free environment for your note-taking needs.
            </p>
            <p>We hope you enjoy using our app as much as we enjoyed building it for you!</p>
        </div>
    );
};

export default About;
