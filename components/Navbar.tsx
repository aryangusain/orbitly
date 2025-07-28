"use client";

import { motion } from 'motion/react'
import Button from "./ui/Button";
import Link from 'next/link';

const navItems = [
  { name: "Home", id: "#" },
  { name: "Features", id: "#features" },
  { name: "Testimonials", id: "#testimonials" },
  { name: "Pricing", id: "#pricing" },
  { name: "FAQ", id: "#faq" },
];

const Navbar = () => {

  return (
    <nav
      className=" flex items-center justify-center gap-[100px] py-[20px] bg-transparent"
    >
      <motion.h1
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="text-3xl font-bold cursor-pointer"
      >
        Orbitly
      </motion.h1>

      <ul className="flex gap-[20px] text-sm font-medium">
        {navItems.map((item) => (
            <Link href={item.id} key={item.id} className="hover:underline">
              <li 
                key={item.id} 
                className='py-2 px-3 rounded-lg'
              >
                {item.name}
              </li>
            </Link>
        ))}
      </ul>

      <Button variant="primary">Get Started</Button>
    </nav>
  );
};

export default Navbar;
