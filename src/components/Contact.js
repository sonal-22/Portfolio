import React from 'react';
import { FiMail, FiLinkedin, FiPhone } from 'react-icons/fi';
import '../Styles/Contact.css';

const Contact = () => {
    return (
        <div id="contact" className="contact-container">
            <form
                method="POST"
                action="https://getform.io/f/f1774867-3675-46c2-ad3f-659402b866c2"
                className="contact-form"
            >
                <h2>Contact Me</h2>
                <p className="contact-email">// Email me at - sonalchandgude22@gmail.com</p>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                    />
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Message"
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                <div className="contact-icons" style={{ display: 'inline-block' }}>
                    <a href="mailto:sonalchandgude22@gmail.com" style={{ display: 'flex', alignItems: 'center' }}>
                        <FiMail size={32} />
                        <span style={{ marginLeft: '5px' }}>Email</span>
                    </a>
                </div>
                <div className="contact-icons" style={{ display: 'inline-block', marginLeft: '20px' }}>
                    <a href="https://www.linkedin.com/in/sonal-chandgude/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                        <FiLinkedin size={32} />
                        <span style={{ marginLeft: '5px' }}>LinkedIn</span>
                    </a>
                </div>
                <div className="contact-icons" style={{ display: 'inline-block', marginLeft: '20px' }}>
                    <a href="tel:9834205512" style={{ display: 'flex', alignItems: 'center' }}>
                        <FiPhone size={32} />
                        <span style={{ marginLeft: '5px' }}>Call</span>
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Contact;
