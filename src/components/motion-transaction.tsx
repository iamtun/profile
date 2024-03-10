import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion-transaction';

interface MotionTransactionProps {
  children: React.ReactNode;
  position: 'right' | 'bottom';
  className?: string;
}

const MotionTransaction: React.FC<MotionTransactionProps> = (props) => {
  const { children, position, className } = props;
  return (
    <motion.div
      variants={fadeIn(position)}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionTransaction;
