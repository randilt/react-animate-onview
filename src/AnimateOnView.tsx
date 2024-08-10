import * as React from "react";
import { motion, Variants } from "framer-motion";

type AnimationType =
  | "fadeInFromBottom"
  | "fadeInFromLeft"
  | "fadeInFromRight"
  | "zoomIn"
  | "rotateIn";

interface AnimateOnViewProps {
  children: React.ReactNode;
  animation: AnimationType;
  duration?: number;
  delay?: number;
  staggerDelay?: number;
  viewportOnce?: boolean;
  viewportAmount?: number;
}

const animations: Record<AnimationType, Variants> = {
  fadeInFromBottom: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInFromLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInFromRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -180 },
    visible: { opacity: 1, rotate: 0 },
  },
};

const AnimateOnView: React.FC<AnimateOnViewProps> = ({
  children,
  animation,
  duration = 0.5,
  delay = 0,
  staggerDelay = 0.1,
  viewportOnce = false,
  viewportAmount = 0.1,
}) => {
  const childrenArray = React.Children.toArray(children);

  if (childrenArray.length === 1) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: viewportOnce, amount: viewportAmount }}
        transition={{ duration, delay }}
        variants={animations[animation]}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: viewportOnce, amount: viewportAmount }}
          transition={{ duration, delay: delay + index * staggerDelay }}
          variants={animations[animation]}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
};

export default AnimateOnView;
