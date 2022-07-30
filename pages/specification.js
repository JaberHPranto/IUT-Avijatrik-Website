import React from "react";
import Layout from "/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeIn, fadeStagger } from "../variants";
const Specification = () => {
  const contents = [
    "Technical specs:",
    "Drive system:",
    "Weight:",
    "Height:",
    "Power source",
    "Max temp:",
    "Min temp:",
    "Max speed:",
    "Min turning radius:",
    "Driving mode:",
  ];
  return (
    <Layout>
      <div className="h-screen">
        <div className="bg-homeBackground h-screen bg-cover bg-center bg-no-repeat  bgBlur -z-10 absolute top-0 left-0 right-0 bottom-0" />
        {/* frame */}
        <div className="flex items-center justify-center h-full md:justify-end md:container">
          <div className="h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] z-0 relative">
            <img src="/images/form.png" alt="form" />
            {/* login info */}
            <AnimatePresence initial="hidden">
              <div className="absolute left-9 top-9 h-[275px] w-[236px] flex flex-col pl-8 pt-4 lg:left-12 lg:top-12 lg:h-[366px] lg:w-[316px]">
                {contents.map((content, i) => (
                  <motion.div
                    variants={fadeStagger}
                    initial="initial"
                    animate="animate"
                    custom={i}
                    key={i}
                    className="lg:text-[21px]"
                  >
                    {content}
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Specification;
