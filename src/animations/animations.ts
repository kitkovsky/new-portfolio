import { Variants } from "framer-motion";

export const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: "-50%",
  },

  visible: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 0.8,
    },
  },
};

export const slideBottom: Variants = {
  hidden: {
    opacity: 0,
    y: "30%",
  },

  visible: {
    opacity: 1,
    y: "0",
    transition: {
      duration: 0.8,
    },
  },
};
