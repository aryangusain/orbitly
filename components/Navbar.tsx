"use client"

import { useState, useEffect } from "react";
import { motion } from 'motion/react';
import Button from "./ui/Button";

const Navbar = () => {
    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'Features', id: 'features' },
        { name: 'Testimonials', id: 'testimonials' },
        { name: 'Pricing', id: 'pricing' },
        { name: 'FAQ', id: 'faq' },
    ];

    const [activeSection, setActiveSection] = useState<string>('home');
    
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollY = window.scrollY;
            
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && scrollY >= (section.offsetTop - 120)) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };
        
        window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
    }, []);
        
    const handleNavItemClick = (id: string) => {
        setActiveSection(id);
        document.getElementById(id)?.scrollIntoView({block: "center", inline: "center", behavior: 'smooth' });
    };
        
    return (
        <motion.nav 
            className="fixed top-0 bg-background/60 z-1 flex items-center justify-center gap-[80px] py-[16px] w-full">
            <motion.h1 whileHover={{scale: 1.02}} transition={{ duration:0.3 }} className="font-bold text-3xl cursor-pointer">Orbitly</motion.h1>
            <ul className="flex gap-[20px]">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <button
                            onClick={() => handleNavItemClick(item.id)}
                            className="p-2 relative text-[15px] focus:outline-none cursor-pointer"
                        >
                            {item.name}
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="underline" 
                                    className="absolute bottom-0 left-0 h-0.5 bg-highlight w-full"
                                    initial={false}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                />
                            )}
                        </button>
                    </li>
                ))}
            </ul>
            <Button variant="primary">Get Started</Button>
        </motion.nav>
    );
}

export default Navbar