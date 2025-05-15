"use client";

import { useState } from "react";
import "../styles/catalogo.css";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";

export default function Catalogo({ children, categoria }) {
    const [isMinimized, setIsMinimized] = useState(false);

    const toggleVisibility = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <section id={categoria}>
            <div id="div-top">
                <h2>{categoria}</h2>
                <button onClick={toggleVisibility} id="toggle-button">
                    {isMinimized ? <HiChevronDown size={24} /> : <HiChevronUp size={24} />}
                </button>
            </div>
            <div id="div-section" className={isMinimized ? "collapsed" : "expanded"}>
                {children}
            </div>
        </section>
    );
}