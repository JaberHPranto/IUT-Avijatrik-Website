export const fadeIn = (direction, delay = 0) => {
  return {
    initial: {
      y: direction === "up" ? 40 : -60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 0.5,
        delay,
        ease: "easeInOut",
      },
    },
  };
};

export const navbarTab = {
  initial: {
    x: -800,
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.8,
      //   type: "spring",
    },
  },
};

export const fadeStagger = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
    },
  }),
};
