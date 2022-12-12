import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingCard() {
  return (
    <motion.div className="listing animate-pulse" whileHover={{ scale: 1.1 }}>
      <div className="listing__content">
        <div className="listing__image-container">
          <div className="listing__image flex justify-center items-center w-full h-48 bg-slate-400"></div>
        </div>
        <div className="listing__details">
          <div className="listing__row">
            <span className="listing__title w-[150px] h-3 rounded-xl bg-slate-400"></span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
