import Layout from "/components/Layout";
import { motion } from "framer-motion";
import { fadeIn } from "/variants";
const Home = () => {
  return (
    <Layout>
      <div className="bg-homeBackground h-screen bg-cover bg-center bg-no-repeat ">
        <div className="h-full flex items-center justify-center relative flex-col">
          <div className="h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px] relative -mt-5">
            <img
              className="rotate"
              src={"/images/centerCircle.png"}
              alt="circle"
            />
          </div>
        </div>
        <div className="absolute bottom-16 lg:bottom-8 w-full flex flex-col justify-center items-center gap-3">
          <motion.h1
            variants={fadeIn("down")}
            initial="initial"
            animate="animate"
            className="font-bold text-3xl lg:text-4xl "
          >
            IUT AVIJATRIK
          </motion.h1>
          <motion.button
            variants={fadeIn("down", 0.2)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1 }}
            className="text-lg lg:text-xl border-2 border-white focus:outline-none px-6  lg:px-8 rounded-3xl text-white/80 hover:text-white hover:shadow-glow"
          >
            START
          </motion.button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
