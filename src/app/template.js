"use client";

import { motion } from "framer-motion";

export default function Transition({ children }) {
  return (
    <motion.div>
      {children}
    </motion.div>
  );
}
