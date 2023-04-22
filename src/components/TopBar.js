import React from 'react';
import { Link } from 'react-router-dom';

function TopBar() {
    return (
        <nav>
            <ul class="menu">
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/projects">projects</Link>
                </li>
                <li>
                    <Link to="/contact">contact</Link>
                </li>
                <li class="link">
                    <Link to="/resume">resume</Link>
                </li>
                <li class="link">
                    <a href="https://github.com/dorianjimenez" target="_blank" rel="noopener noreferrer">
                        gitHub
                    </a>
                </li>
                <li class="link">
                    <a href="https://www.linkedin.com/in/dorian-jimenez-636078193/" target="_blank" rel="noopener noreferrer">
                        linkedin
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default TopBar;