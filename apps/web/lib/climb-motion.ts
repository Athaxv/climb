"use client";

import { useReducedMotion, type Transition, type Variants } from "motion/react";

const spring: Transition = { type: "spring", stiffness: 380, damping: 30 };
const fade: Transition = { duration: 0.22, ease: [0.16, 1, 0.3, 1] };

export function enterDelaySeconds(index?: number) {
  if (index == null) return 0;
  return index < 12 ? index * 0.04 : 0;
}

export function useClimbMotion() {
  const reduced = Boolean(useReducedMotion());

  const enter: Variants = reduced
    ? {
        hidden: { opacity: 1, y: 0 },
        show: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: spring },
      };

  const fadeIn: Variants = reduced
    ? {
        hidden: { opacity: 1 },
        show: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: fade },
      };

  const stagger: Variants = {
    hidden: {},
    show: {
      transition: reduced ? { staggerChildren: 0 } : { staggerChildren: 0.06 },
    },
  };

  return {
    reduced,
    enter,
    fadeIn,
    stagger,
    hoverLift: reduced ? undefined : { y: -4 },
    tap: reduced ? undefined : { scale: 0.99 },
    spring: reduced ? { duration: 0 } : spring,
    fade,
  };
}
