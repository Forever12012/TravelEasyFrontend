import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:8000/newsletter", { email });
      toast.success("Email sent successfully!", { autoClose: 3000 });
      setEmail("");
    } catch (error) {
      toast.error("Failed to send email. Please try again.", {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
      <div className="container relative">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="py-[60px] px-0">
              <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div className="lg:col-span-4 md:col-span-12">
                  <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
                    TravelEasy
                  </h1>
                  <p className="mt-6 text-gray-300">
                    Embark on your dream getaway with our personalized vacation
                    planning services. Whether you're seeking a serene beach
                    escape, an adventurous mountain trek, or a vibrant city
                    exploration, we craft tailored itineraries that cater to
                    your unique preferences and desires.
                  </p>

                  {/*end icon*/}
                </div>
                {/*end col*/}
                <div className="lg:col-span-2 md:col-span-4">
                  <h5 className="tracking-[1px] text-gray-100 font-semibold">
                    Company
                  </h5>
                  <ul className="list-none footer-list mt-6">
                    <li>
                      <Link
                        to={"/aboutus"}
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b" /> About us
                      </Link>
                    </li>
                    <li className="mt-[10px]">
                      <a className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">
                        <i className="uil uil-angle-right-b" /> Services
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">
                        <i className="uil uil-angle-right-b" /> Blog
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <Link
                        to={"/login"}
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b" /> Login
                      </Link>
                    </li>
                  </ul>
                </div>
                {/*end col*/}
                <div className="lg:col-span-3 md:col-span-4">
                  <h5 className="tracking-[1px] text-gray-100 font-semibold">
                    Useful Links
                  </h5>
                  <ul className="list-none footer-list mt-6">
                    <li>
                      <a className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">
                        <i className="uil uil-angle-right-b" /> Terms of
                        Services
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">
                        <i className="uil uil-angle-right-b" /> Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
                {/*end col*/}
                <div className="lg:col-span-3 md:col-span-4">
                  <h5 className="tracking-[1px] text-gray-100 font-semibold">
                    Newsletter
                  </h5>
                  <p className="mt-6">
                    Sign up and receive the latest tips via email.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1">
                      <div className="my-3">
                        <label className="form-label">
                          Write your email
                          <span className="text-red-600">*</span>
                        </label>
                        <div className="form-icon relative mt-2">
                          <i
                            data-feather="mail"
                            className="size-4 absolute top-3 start-4"
                          />
                          <input
                            type="email"
                            className="form-input ps-12 rounded w-full py-2 px-3 h-10 bg-gray-800 border-0 text-gray-100 focus:shadow-none focus:ring-0 placeholder:text-gray-200"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        id="submitsubscribe"
                        name="send"
                        className={`py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md ${
                          loading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Subscribe"}
                      </button>
                      <ToastContainer />
                    </div>
                  </form>
                </div>
                {/*end col*/}
              </div>
              {/*end grid*/}
            </div>
            {/*end col*/}
          </div>
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}
      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container relative text-center">
          <div className="grid md:grid-cols-2 items-center">
            <div className="md:text-start text-center">
              <p className="mb-0">
                © TravelEasy. Design with
                <i className="mdi mdi-heart text-red-600" /> by Tushar H .
              </p>
            </div>
            <ul className="list-none md:text-end text-center mt-6 md:mt-0">
              <li className="inline">
                <a href="#">
                  <img
                    src="assets/images/payments/american-ex.png"
                    className="max-h-6 inline"
                    title="American Express"
                    alt=""
                  />
                </a>
              </li>
              <li className="inline">
                <a href="#">
                  <img
                    src="assets/images/payments/discover.png"
                    className="max-h-6 inline"
                    title="Discover"
                    alt=""
                  />
                </a>
              </li>
              <li className="inline">
                <a href="#">
                  <img
                    src="assets/images/payments/master-card.png"
                    className="max-h-6 inline"
                    title="Master Card"
                    alt=""
                  />
                </a>
              </li>
              <li className="inline">
                <a href="#">
                  <img
                    src="assets/images/payments/paypal.png"
                    className="max-h-6 inline"
                    title="Paypal"
                    alt=""
                  />
                </a>
              </li>
              <li className="inline">
                <a href="#">
                  <img
                    src="assets/images/payments/visa.png"
                    className="max-h-6 inline"
                    title="Visa"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
          {/*end grid*/}
        </div>
        {/*end container*/}
      </div>
    </footer>
  );
};
