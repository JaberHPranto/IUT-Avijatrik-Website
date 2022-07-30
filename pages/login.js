const Login = () => {
  return (
    <>
      <div className="bg-homeBackground h-screen bg-cover bg-center bg-no-repeat  bgBlur -z-10 absolute top-0 left-0 right-0 bottom-0" />
      <div className="flex justify-center items-center flex-col gap-2">
        {/* logo */}
        <div>
          <img
            src="/images/avijatrik_logo.png"
            alt="logo"
            className="z-10 h-[125px] w-[125px] mt-14 lg:h-[160px] lg:w-[160px] lg:mt-8"
          />
        </div>
        {/* frame */}
        <div className="h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] z-0 relative">
          <img src="/images/form.png" alt="form" />
          {/* login info */}
          <div className="absolute left-9 top-9 h-[275px] w-[236px] flex  flex-col p-8 gap-8 lg:left-12 lg:top-12 lg:h-[366px] lg:w-[316px] lg:gap-12">
            <p className="text-2xl lg:text-[34px] text-center">Login</p>
            <div className="overflow-hidden space-y-2 lg:space-y-3">
              <input type="text" placeholder="Username" className="formInput" />
              <input type="text" placeholder="Password" className="formInput" />
            </div>
            <div className="bg-white text-black/80 text-center p-1.5 rounded-lg lg:p-2 text-sm font-medium lg:text-base font-poppins relative">
              <button className="tracking-widest">LOGIN</button>
              <p className="text-white/80 cursor-pointer text-[8px] lg:text-[12px] absolute right-0 bottom-11 lg:bottom-16 z-10">
                Forgot password ?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
