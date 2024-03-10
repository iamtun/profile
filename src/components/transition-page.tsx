'use client';
import React from 'react';

import { transitionVariantPage } from '@/utils/motion-transaction';
import { AnimatePresence, motion } from 'framer-motion';

const TransactionPage: React.FC = () => {
  return (
    <AnimatePresence mode="wait">
      <div>
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
          variants={transitionVariantPage}
          className="fixed top-0 bottom-0 right-full w-screen z-30 bg-[#2e2257]"
        ></motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TransactionPage;
