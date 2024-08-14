import React from "react";

export const Hero = () => {
  return (
    <section className="relative md:flex md:h-screen items-center md:py-0 pt-36 pb-56 bg-[url('https://via.placeholder.com/')] bg-no-repeat bg-center bg-cover bg-fixed">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-900/40"></div>
      <div className="container relative">
        <div className="grid grid-cols-1 mt-10">
          <h4 className="lg:leading-normal leading-normal text-white text-4xl lg:text-5xl mb-5 font-bold">
            Find Your <br />
            Favorite Place Here!
          </h4>
          <p className="text-slate-400 text-lg max-w-xl">
            Discover the world with confidence and ease. Our expert team is
            dedicated to curating unforgettable travel experiences tailored to
            your desires.
          </p>
        </div>
      </div>

      <div className="container absolute bottom-0 start-0 end-0">
        <div className="grid grid-cols-1">
          <div className="p-6 border-t border-dashed border-white/30">
            <div className="grid md:grid-cols-4 grid-cols-2 gap-[30px]">
              <div className="counter-box flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white">
                  <span className="counter-value" data-target="100">
                    10
                  </span>
                  k+
                </h1>
                <h5 className="counter-head text-xs font-semibold text-white/40 ms-2">
                  Happy <br />
                  Customer
                </h5>
              </div>

              <div className="counter-box flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white">
                  <span className="counter-value" data-target="15">
                    3
                  </span>
                </h1>
                <h5 className="counter-head text-xs font-semibold text-white/40 ms-2">
                  Years of <br />
                  Experiences
                </h5>
              </div>

              <div className="counter-box flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white">
                  <span className="counter-value" data-target="4">
                    1
                  </span>
                  k+
                </h1>
                <h5 className="counter-head text-xs font-semibold text-white/40 ms-2">
                  Best <br />
                  Destinations
                </h5>
              </div>

              <div className="counter-box flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white">
                  <span className="counter-value" data-target="4.9">
                    1500
                  </span>
                </h1>
                <h5 className="counter-head text-xs font-semibold text-white/40 ms-2">
                  Reviews or <br />
                  Ratings
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
