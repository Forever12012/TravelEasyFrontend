import React, { useState } from "react";

export const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <section id="faq" className="relative md:py-20 py-10">
      <div className="container relative md:mt-15 mt-12">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Frequently Asked Questions
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Get answers to some of the most common questions about our vacation
            plans and services. We're here to help make your travel dreams come
            true.
          </p>
        </div>
        {/* end grid */}

        <div className="relative grid md:grid-cols-12 grid-cols-1 items-center mt-8 gap-[30px]">
          <div className="md:col-span-4">
            <img
              src="assets/images/travel/7.jpg"
              className="rounded-md shadow dark:shadow-gray-800"
              alt="Vacation Destination"
            />
          </div>
          {/* end col */}

          <div className="md:col-span-6">
            <div>
              <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden">
                <h2 className="text-base font-semibold">
                  <button
                    type="button"
                    className="flex justify-between items-center p-5 w-full font-medium text-start"
                    onClick={() => toggleItem(1)}
                  >
                    <span>How do I book a vacation package?</span>
                    <svg
                      className={`size-4 ${
                        openItem === 1 ? "rotate-180" : ""
                      } shrink-0`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                {openItem === 1 && (
                  <div>
                    <div className="p-5">
                      <p className="text-slate-400 dark:text-gray-400">
                        Booking a vacation package is easy! Simply choose your
                        desired destination and travel dates, select the package
                        that suits your needs, and follow the checkout process.
                        If you need assistance, our customer support team is
                        here to help.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                <h2 className="text-base font-semibold">
                  <button
                    type="button"
                    className="flex justify-between items-center p-5 w-full font-medium text-start"
                    onClick={() => toggleItem(2)}
                  >
                    <span>What is included in the vacation package?</span>
                    <svg
                      className={`size-4 ${
                        openItem === 2 ? "rotate-180" : ""
                      } shrink-0`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                {openItem === 2 && (
                  <div>
                    <div className="p-5">
                      <p className="text-slate-400 dark:text-gray-400">
                        Our vacation packages typically include accommodations,
                        meals, transportation, and some activities. Specific
                        inclusions may vary by package, so be sure to check the
                        details before booking.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                <h2 className="text-base font-semibold">
                  <button
                    type="button"
                    className="flex justify-between items-center p-5 w-full font-medium text-start"
                    onClick={() => toggleItem(3)}
                  >
                    <span>Can I customize my vacation package?</span>
                    <svg
                      className={`size-4 ${
                        openItem === 3 ? "rotate-180" : ""
                      } shrink-0`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                {openItem === 3 && (
                  <div>
                    <div className="p-5">
                      <p className="text-slate-400 dark:text-gray-400">
                        Yes, we offer customizable vacation packages to fit your
                        preferences. You can select and add extra activities,
                        accommodations, or transportation options to tailor your
                        trip to your needs.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Add more items similarly... */}
            </div>
          </div>
          {/* end col */}
        </div>
        {/* end grid */}
      </div>
      {/* end container */}
    </section>
  );
};
