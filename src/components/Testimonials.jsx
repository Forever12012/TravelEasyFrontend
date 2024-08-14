export const Testimonials = () => {
  return (
    <section className="relative md:py-24 py-16">
      <div className="container relative md:mt-24 mt-16">
        <div
          className="grid grid-cols-1 pb-8 text-center wow animate__animated animate__fadeInUp"
          data-wow-delay=".1s"
        >
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            What Our Users Say
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Read firsthand experiences from our satisfied users. Discover how
            our services have transformed their travel adventures and made
            planning seamless and enjoyable.
          </p>
        </div>
        {/* end grid */}

        <div className="grid grid-cols-1 mt-8">
          <div
            className="tiny-three-item wow animate__animated animate__fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="tiny-slide text-center">
              <div className="cursor-e-resize">
                <div className="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                  <i className="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
                  <p className="text-slate-400">
                    " Our experience with TravelEasy has been outstanding. The
                    team offers exceptional support and delivers results that
                    exceed expectations. "
                  </p>
                  <ul className="list-none mb-0 text-amber-400 mt-3">
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

                <div className="text-center mt-5">
                  <img
                    src="assets/images/client/01.jpg"
                    className="size-14 rounded-full shadow-md mx-auto"
                    alt=""
                  />
                  <h6 className="mt-2 font-semibold">Calvin Carlo</h6>
                  <span className="text-slate-400 text-sm">Manager</span>
                </div>
              </div>
            </div>

            <div className="tiny-slide text-center">
              <div className="cursor-e-resize">
                <div className="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                  <i className="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
                  <p className="text-slate-400">
                    " The TravelEasy support team has been outstanding! Their
                    prompt and effective assistance has made navigating travel
                    plans effortless. "
                  </p>
                  <ul className="list-none mb-0 text-amber-400 mt-3">
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

                <div className="text-center mt-5">
                  <img
                    src="assets/images/client/02.jpg"
                    className="size-14 rounded-full shadow-md mx-auto"
                    alt=""
                  />
                  <h6 className="mt-2 font-semibold">Christa Smith</h6>
                  <span className="text-slate-400 text-sm">Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end grid */}
      </div>
      {/*end container*/}
    </section>
  );
};
