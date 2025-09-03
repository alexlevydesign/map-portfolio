// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help

'use client';

import styles from "./contact-form.module.scss";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xgvllabv");
  
  return (
    <div className={styles.ContactFormContainer} id="contact">
        <div className={styles.textContainer}>
            <h2>Get in touch</h2>
            <p>Maps aren&#39;t just pretty pictures. They tell stories, ones that can&#39;t be explained in words. A map can help you frame a memory or interest in a new light, and I can help you do just that!</p>
            <p>If you would like to request a custom map, or if you have any questions, please do not hesitate to reach out!</p>
            </div>
        <form onSubmit={handleSubmit}>
            <div className={styles.InputContainer}>
        <label htmlFor="email">
            Email
        </label>
        <input className={styles.input}
            id="email"
            type="email" 
            name="email"
        />
            </div>
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
        <div className={styles.InputContainer}>
        <label htmlFor="message">
            Message
        </label>
        <textarea className={styles.textArea}
            id="message"
            name="message"
        />
        </div>
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
        {state.succeeded && (
          <p>Your message has been sent and I will get back to you soon!</p>
        )}
        <button type="submit" disabled={state.submitting} className={styles.button_primary}>
            Submit
        </button>
        
        </form>
    </div>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;





// 'use client';

// import Input from "./Input";
// import Button from "./Button";

// import styles from "./contact-form.module.scss";
// import { useState, FormEvent } from 'react';

// import { useForm, ValidationError } from '@formspree/react';

// export default function ContactForm() {
//     const [formData, setFormData] = useState({
//         email: '',
//         inquiryType: '',
//         message: ''
//     });

//     const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//         setFormData(prev => ({
//             ...prev,
//             [field]: e.target.value
//         }));
//     };

//     const handleSubmit = (e: FormEvent) => {
//         e.preventDefault();
//         console.log('Form submitted:', formData);
//         // Handle form submission here
//     };

//     return (
//         <div className={styles.ContactFormContainer}>
//             <div className={styles.textContainer}>
//             <h2>Get in touch</h2>
//             <p>Maps aren’t just pretty pictures. They tell stories, ones that can’t be explained in words. A map can help you frame a memory or interest in a new light, and I can help you do just that!</p>
//             </div>
//             <form className={styles.ContactForm} onSubmit={handleSubmit} action="https://formspree.io/f/mlevbeqj" method="post">
//                 <Input 
//                     type="email" 
//                     label="Email" 
//                     value={formData.email}
//                     onChange={handleChange('email')}
                    
//                 />

//                 <Input 
//                     type="radio" 
//                     label="Inquiry Type" 
//                     name="inquiryType"
//                     value={formData.inquiryType}
//                     onChange={handleChange('inquiryType')}
//                     options={[
//                         { value: 'custom_map', label: 'Custom map request' },
//                         { value: 'general', label: 'General inquiry' }
//                     ]}
//                 />
                
//                 <Input 
//                     type="textarea" 
//                     label="Message" 
//                     value={formData.message}
//                     onChange={handleChange('message')}
//                 />

//                 <Button variant="primary">Submit</Button>
//             </form>
//         </div>
        
//     );
// }