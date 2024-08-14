export const Destinations = () => {
  return (
    <section className="relative md:py-20 py-10">
      <div className="container relative md:mt-15 mt-2">
        <div className="grid grid-cols-1 pb-8">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Popular Destination
          </h3>
          <p className="text-slate-400 max-w-xl">
            Discover our handpicked popular destinations that promise
            unforgettable experiences. From stunning landscapes to vibrant
            cityscapes, explore locations that offer something for every
            traveler.
          </p>
        </div>
        {/* end grid */}

        <div id="grid" className="md:flex justify-center mx-auto">
          <div
            className="lg:w-1/4 md:w-1/2 p-4 picture-item"
            data-groups='["beach"]'
          >
            <div className="group relative overflow-hidden rounded-md">
              <div className="relative overflow-hidden">
                <img
                  src="assets/images/travel/1.jpg"
                  className="rounded-md"
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent"></div>
              </div>

              <div className="absolute bottom-0 start-0 end-0 flex justify-between p-6">
                <div>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white text-lg font-semibold block"
                  >
                    Thailand
                  </a>

                  <ul className="list-none mb-0 text-amber-400">
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                  </ul>
                </div>

                <h5 className="text-white/70">$59/night</h5>
              </div>

              <div className="absolute end-0 top-0 m-6 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                <a
                  href="#!"
                  className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"
                >
                  <i className="mdi mdi-heart"></i>
                </a>
              </div>
            </div>
          </div>
          {/* end content */}

          <div
            className="lg:w-1/4 md:w-1/2 p-4 picture-item"
            data-groups='["park"]'
          >
            <div className="group relative overflow-hidden rounded-md">
              <div className="relative overflow-hidden">
                <img
                  src="assets/images/travel/2.jpg"
                  className="rounded-md"
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent"></div>
              </div>

              <div className="absolute bottom-0 start-0 end-0 flex justify-between p-6">
                <div>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white text-lg font-semibold block"
                  >
                    Bali
                  </a>

                  <ul className="list-none mb-0 text-amber-400">
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                  </ul>
                </div>

                <h5 className="text-white/70">$59/night</h5>
              </div>

              <div className="absolute end-0 top-0 m-6 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                <a
                  href="#!"
                  className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"
                >
                  <i className="mdi mdi-heart"></i>
                </a>
              </div>
            </div>
          </div>
          {/* end content */}

          <div
            className="lg:w-1/4 md:w-1/2 p-4 picture-item"
            data-groups='["nature"]'
          >
            <div className="group relative overflow-hidden rounded-md">
              <div className="relative overflow-hidden">
                <img
                  src="assets/images/travel/3.jpg"
                  className="rounded-md"
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent"></div>
              </div>

              <div className="absolute bottom-0 start-0 end-0 flex justify-between p-6">
                <div>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white text-lg font-semibold block"
                  >
                    Bangkok
                  </a>

                  <ul className="list-none mb-0 text-amber-400">
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                  </ul>
                </div>

                <h5 className="text-white/70">$59/night</h5>
              </div>

              <div className="absolute end-0 top-0 m-6 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                <a
                  href="#!"
                  className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"
                >
                  <i className="mdi mdi-heart"></i>
                </a>
              </div>
            </div>
          </div>
          {/* end content */}

          <div
            className="lg:w-1/4 md:w-1/2 p-4 picture-item"
            data-groups='["mountain"]'
          >
            <div className="group relative overflow-hidden rounded-md">
              <div className="relative overflow-hidden">
                <img
                  src="assets/images/travel/4.jpg"
                  className="rounded-md"
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent"></div>
              </div>

              <div className="absolute bottom-0 start-0 end-0 flex justify-between p-6">
                <div>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white text-lg font-semibold block"
                  >
                    Pataya
                  </a>

                  <ul className="list-none mb-0 text-amber-400">
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                    <li className="inline">
                      <i className="mdi mdi-star"></i>
                    </li>
                  </ul>
                </div>

                <h5 className="text-white/70">$59/night</h5>
              </div>

              <div className="absolute end-0 top-0 m-6 opacity-0 group-hover:opacity-100 duration-500 ease-in-out">
                <a
                  href="#!"
                  className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center text-lg bg-white dark:bg-slate-900 border-0 shadow dark:shadow-gray-800 rounded-full text-red-600/20 hover:text-red-600 focus:text-red-600"
                >
                  <i className="mdi mdi-heart"></i>
                </a>
              </div>
            </div>
          </div>
          {/* end content */}
        </div>
        {/* end grid */}
      </div>
      {/* end container */}
    </section>
  );
};
