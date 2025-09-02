'use client';

import Input from "./Input";
import Button from "./Button";

import styles from "./contact-form.module.scss";
import { useState, FormEvent } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        email: '',
        inquiryType: '',
        message: ''
    });

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [field]: e.target.value
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    return (
        <div className={styles.ContactFormContainer}>
            <div>
            <h2>Get in touch</h2>
            <p>Maps aren’t just pretty pictures. They tell stories, ones that can’t be explained in words. A map can help you frame a memory or interest in a new light, and I can help you do just that!</p>
            </div>
            <form className={styles.ContactForm} onSubmit={handleSubmit} action="https://formspree.io/f/mlevbeqj" method="post">
                <Input 
                    type="email" 
                    label="Email" 
                    value={formData.email}
                    onChange={handleChange('email')}
                    
                />

                <Input 
                    type="radio" 
                    label="Inquiry Type" 
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange('inquiryType')}
                    options={[
                        { value: 'custom_map', label: 'Custom map request' },
                        { value: 'general', label: 'General inquiry' }
                    ]}
                />
                
                <Input 
                    type="textarea" 
                    label="Message" 
                    value={formData.message}
                    onChange={handleChange('message')}
                />

                <Button variant="primary">Submit</Button>
            </form>
        </div>
        
    );
}