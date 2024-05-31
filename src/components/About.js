import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/About.css';

const About = () => (
    <section id="about" className="about">
        <div className="background-animation"></div>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="content"
        >
            <div id="About" className="about-container">
                <h2 className="about-header">About Me</h2>
                <div className="line"></div>
                {/* Your About Me content goes here */}
            </div>

            <p>
                I'm Sonal, BTech in Computer Science and Engineering. As a software developer, I specialize in crafting robust and efficient solutions to complex challenges. With a solid foundation in various programming languages and frameworks, I am adept at designing, implementing, and maintaining software systems that meet both user requirements and industry standards. My experience spans across diverse projects, from developing web applications to designing mobile apps and enterprise solutions. I thrive in collaborative environments, where I leverage my strong communication skills to work effectively with cross-functional teams. Passionate about staying updated with emerging technologies, I am committed to continuous learning and innovation to drive impactful results in every project I undertake.
            </p>
        </motion.div>
    </section>
);

export default About;
