import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Dropdown ({ items }) {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 }
  };

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle Dropdown
      </button>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="dropdown-menu"
      >
        {items.map((item, index) => (
          <div key={index} className="dropdown-item">{item}</div>
        ))}
      </motion.div>
    </div>
  );
};
