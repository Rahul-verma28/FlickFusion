import React, { useState, useEffect } from 'react';
import './style.scss';
import { FaAngleDoubleUp } from "react-icons/fa";


const style = () => {
    const [show, setShow] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            className={`scroll-to-top ${show ? 'show' : ''}`}
            onClick={scrollToTop}
        >
            <FaAngleDoubleUp />
        </button>
    );
};

export default style;
