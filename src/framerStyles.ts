import { AnimationProps, LayoutProps } from "framer-motion";

type CustomMotionProps = AnimationProps & LayoutProps;

// List selection elements hover styles
export const listHoverStyles = {
  color: "#fff",
  backgroundColor: "#f9a826",
  borderColor: "#f9a826",
  transition: {
    duration: 0.1,
    ease: "easeInOut",
  },
};

export const cardLayout: CustomMotionProps = {
  initial: { y: -600 },
  animate: { y: 0 },
  transition: { duration: 1.5, type: "spring" },
};

export const lifeItem: CustomMotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const selectionCard: CustomMotionProps = {
  layout: true,
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const countryList: CustomMotionProps = {
  layout: true,
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const resultsContainer: CustomMotionProps = {
  layout: true,
  initial: { opacity: 0, animationDelay: ".5" },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
  exit: {
    opacity: 0,
  },
};
