import React, { useState, useEffect, useRef } from 'react';
import "./Header.css";

const Header = () => {
    const missions = useRef();
    const projects = useRef();
    const about = useRef();
    const contactus = useRef();
    const academy = useRef();

    const navigationPosition = (event) => {
        const hash = event.target.name;
        switch (hash) {
            case "projects":
                projects.current.scrollIntoView();
                break;
            case "missions":
                missions.current.scrollIntoView();
                break;
            case "about":
                about.current.scrollIntoView();
                break;
            case "contactus":
                contactus.current.scrollIntoView();
                break;
            case "academy":
                academy.current.scrollIntoView();
                break;
            default:
                return "";
        }
    };

    return (
        <div className="header-container">
            <div className='heaedr-dummy'></div>
            <div className='header-wrapper'>
                <a href="/" className="header-home-nav" aria-label="home">
                    <img src="/images/logo.png" alt="" className="logo" />
                </a>
                <nav role="navigation" className="nav-menu">
                    <div className="nav-menu-wrap">
                        <button ref={about} name="about" onClick={navigationPosition} className="nav-btn" >About Us </button>
                        <button ref={projects} name="projects" onClick={navigationPosition} className="nav-btn --selected" > Immersive Acodemy</button>
                        <button ref={missions} name="missions" onClick={navigationPosition} className="nav-btn" > Next missions </button>
                        <button ref={contactus} name="conactus" onClick={navigationPosition} className="nav-btn" > Contact Us </button>
                        {/* <button ref={academy} name="academy" onClick={navigationPosition} className="nav-btn nav-btn--academy" > Academy </button> */}
                    </div>
                </nav>
            </div>
        </div>);
};
export default Header;