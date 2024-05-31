import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/Header.css';

const Header = () => (
    <motion.header
        className="header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
    >
        <div className="header-content">
            <div className="header-info">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    Hi, I'm Sonal Chandgude
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    Software Developer
                </motion.p>
                <a href="/your-resume.pdf" download>
                    <button className="download-button">Download Resume</button>
                </a>
            </div>
            <div className="header-image">
                <img src="/images/sonal.jpeg" alt="Sonal Chandgude" className="profile-image" />
            </div>
        </div>
    </motion.header>
);

export default Header;
