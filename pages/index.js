import Layout from "/components/Layout";
const Home = () => {
  return (
    <Layout>
      <div className="bg-homeBackground h-screen bg-cover bg-center bg-no-repeat ">
        <div className="h-full flex items-center justify-center relative flex-col">
          <div className="h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] relative -mt-5">
            <img src={"/images/centerCircle.png"} alt="circle" />
          </div>
        </div>
        <div className="absolute bottom-16 lg:bottom-8 w-full flex flex-col justify-center items-center gap-3">
          <h1 className="font-bold text-3xl lg:text-4xl ">IUT AVIJATRIK</h1>
          <button className="text-lg lg:text-xl border-2 border-white focus:outline-none px-6  lg:px-8 rounded-3xl text-white/80 hover:text-white hover:shadow-glow">
            START
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
