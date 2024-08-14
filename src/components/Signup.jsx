import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password should have at least 6 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userName.trim() === "") {
      toast.error("Name cannot be empty.", {
        autoClose: 3000,
      });
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.", {
        autoClose: 3000,
      });
      return;
    }

    if (!validatePassword(password)) {
      toast.error(
        "Password must be at least 6 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character.",
        {
          autoClose: 3000,
        }
      );
      return;
    }

    if (!isTermsAccepted) {
      toast.error("You must accept the Terms and Conditions.", {
        autoClose: 3000,
      });
      return;
    }

    setLoading(true);
    try {
      await axios.post("http://localhost:8002/signup", {
        userName,
        email,
        password,
      });
      toast.success("Account created successfully!", {
        autoClose: 3000,
        onClose: () => navigate("/login"),
      });
      setEmail("");
      setUserName("");
      setPassword("");
    } catch (error) {
      toast.error("Failed to create account. Please try again.", {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="md:h-screen py-36 flex items-center bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        <div className="container relative">
          <div className="flex justify-center">
            <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
              <h5 className="my-6 text-xl font-semibold">Signup</h5>
              <form onSubmit={handleSubmit} className="text-start">
                <div className="grid grid-cols-1">
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="RegisterName">
                      Your Name:
                    </label>
                    <input
                      id="RegisterName"
                      value={userName}
                      type="text"
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                      placeholder="Harry"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="RegisterEmail">
                      Email Address:
                    </label>
                    <input
                      id="RegisterEmail"
                      type="email"
                      value={email}
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                      placeholder="name@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="RegisterPassword">
                      Password:
                    </label>
                    <input
                      id="RegisterPassword"
                      type="password"
                      value={password}
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                      placeholder="Password:"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center w-full mb-0">
                      <input
                        className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                        type="checkbox"
                        id="AcceptT&C"
                        checked={isTermsAccepted}
                        onChange={(e) => setIsTermsAccepted(e.target.checked)}
                      />
                      <label
                        className="form-check-label text-slate-400"
                        htmlFor="AcceptT&C"
                      >
                        I Accept{" "}
                        <a href="#" className="text-indigo-600">
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <input
                      type="submit"
                      value={loading ? "Creating Account..." : "Sign Up"}
                      className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                      disabled={loading || !isTermsAccepted}
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-slate-400 me-2">
                      Already have an account?
                    </span>
                    <Link
                      to={"/login"}
                      className="text-black dark:text-white font-bold inline-block"
                    >
                      Sign in
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};
