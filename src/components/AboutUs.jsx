import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const AboutUS = () => {
  return (
    <>
      <Header />
      <section className="relative table w-full py-36 lg:py-44  bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-black opacity-75" />
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              About Us
            </h3>
            <p className="text-slate-300 text-lg max-w-xl mx-auto">
              At TravelEasy, we are dedicated to making your travel dreams a
              reality. Our platform offers a seamless booking experience for
              vacation plans, providing you with a wide range of destinations
              and personalized options. With our expertise and commitment to
              excellence, we ensure that your journey is memorable and
              hassle-free. Explore, plan, and embark on your next adventure with
              confidence and ease.
            </p>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-block">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link to={"/"}>TravelEasy</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <i className="uil uil-angle-right-b" />
            </li>

            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              Aboutus
            </li>
          </ul>
        </div>
      </section>
      {/*end section*/}
      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto scale-[2.0] origin-top"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      {/* End Hero */}
      {/* Start Section*/}
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-5 md:col-span-6">
              <div className="grid grid-cols-12 gap-6 items-center">
                <div className="col-span-6">
                  <div className="grid grid-cols-1 gap-6">
                    <img
                      src="assets/images/about/ab03.jpg"
                      className="shadow rounded-md"
                      alt=""
                    />
                    <img
                      src="assets/images/about/ab02.jpg"
                      className="shadow rounded-md"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="grid grid-cols-1 gap-6">
                    <img
                      src="assets/images/about/ab01.jpg"
                      className="shadow rounded-md"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 md:col-span-6">
              <div className="lg:ms-5">
                <div className="flex mb-4">
                  <span className="text-indigo-600 text-2xl font-bold mb-0">
                    <span
                      className="counter-value text-6xl font-bold"
                      data-target={15}
                    >
                      3
                    </span>
                    +
                  </span>
                  <span className="self-end font-medium ms-2">
                    Years <br /> Experience
                  </span>
                </div>
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                  Who we are ?
                </h3>
                <p className="text-slate-400 max-w-xl">
                  We are a passionate team of travel enthusiasts dedicated to
                  curating exceptional vacation experiences. Our platform is
                  designed to simplify your travel planning by offering a
                  diverse selection of destinations and personalized travel
                  packages. With a focus on customer satisfaction and ease of
                  use, we strive to make every journey enjoyable and memorable.
                  Discover your next adventure with us and let us turn your
                  travel dreams into reality.
                </p>
                <div className="mt-6">
                  <Link
                    to={"/contactus"}
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"
                  >
                    <i className="uil uil-envelope" /> Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End Section*/}

      {/* End */}
      {/* Start */}
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 md:pt-0 pt-0">
        <div className="container relative">
          <div className="grid grid-cols-1 justify-center">
            <div className="relative z-1">
              <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                <div className="lg:col-start-2 lg:col-span-10">
                  <div className="relative">
                    <img
                      src="assets/images/cta-bg.jpg"
                      className="rounded-md shadow-lg"
                      alt=""
                    />
                    <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                      <a
                        href="#!"
                        data-type="youtube"
                        data-id="S_CGed6E610"
                        className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white"
                      >
                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content md:mt-8">
                <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                  <div className="lg:col-start-2 lg:col-span-10">
                    <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                      <div className="mt-8">
                        <div className="section-title text-md-start">
                          <h6 className="text-white/50 text-lg font-semibold">
                            Team
                          </h6>
                          <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2">
                            Meet Experience <br /> Team Member
                          </h3>
                        </div>
                      </div>
                      <div className="mt-8">
                        <div className="section-title text-md-start">
                          <p className="text-white/50 max-w-xl mx-auto mb-2">
                            Our team consists of travel experts who are
                            dedicated to providing you with the best vacation
                            experiences. With a wealth of knowledge and a
                            passion for travel, we’re here to help you every
                            step of the way. From personalized recommendations
                            to seamless booking, we’re committed to making your
                            travel dreams come true.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end row */}
        </div>
        {/*end container*/}
        <div className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-indigo-500 to-indigo-600" />
      </section>
      <Footer />
      {/*end section*/}
      {/* End */}
      {/* Start */}

      {/*end section*/}
      {/* End */}
    </>
  );
};
