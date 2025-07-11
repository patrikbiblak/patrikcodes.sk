import { useRef } from 'react';
import ScrollAnimation from "../hooks/ScrollAnimation";
import "../styles/contactpage.css";

const ContactPage = () => {
    const rightRef = useRef(null);
    ScrollAnimation(rightRef, { customClass: 'right', immediate: true });

    return (
        <div className="contact-page container">
            <h1 ref={rightRef}>Poďme na to!</h1>
        </div>
    )
}

export default ContactPage;