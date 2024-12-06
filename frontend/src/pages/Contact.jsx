import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [state, handleSubmit] = useForm("mrbgdwro"); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    if (state.succeeded) {
        return <p>Thanks for your message! We'll get back to you shortly.</p>;
    }

    return (
        <div className="contact-container" id="contact">
            <hr />
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.</p>

            {isSubmitted && <p className="success-message">Thank you for your message!</p>}

            {/* Formspree Integration Form */}
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button type="submit" disabled={state.submitting} className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;

