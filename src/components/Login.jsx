import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true before starting the request

    try {
      await axios.post("http://localhost:8002/login", {
        email,
        password,
      });
      toast.success("Login successful!");
    } catch (error) {
      // Show detailed error message if available
      toast.error(
        error.response?.data.message || "Failed to Login. Please try again.",
        {
          autoClose: 3000,
        }
      );
    } finally {
      setLoading(false); // Reset loading state after request
    }
  };

  return (
    <>
      <section className="md:h-screen py-36 flex items-center bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        <div className="container relative">
          <div className="flex justify-center">
            <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
              <Link to="/" className="text-indigo-600 dark:text-indigo-400">
                &larr; Back to Home
              </Link>
              <h5 className="my-6 text-xl font-semibold">Login</h5>
              <form className="text-start" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1">
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="LoginEmail">
                      Email Address:
                    </label>
                    <input
                      id="LoginEmail"
                      type="email"
                      value={email}
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                      placeholder="name@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="LoginPassword">
                      Password:
                    </label>
                    <input
                      id="LoginPassword"
                      type="password"
                      value={password}
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                      placeholder="Password:"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-between mb-4">
                    <p className="text-slate-400 mb-0">
                      <a
                        href="auth-re-password.html"
                        className="text-slate-400"
                      >
                        Forgot password ?
                      </a>
                    </p>
                  </div>
                  <div className="mb-4">
                    <input
                      type="submit"
                      value={loading ? "Logging In..." : "Log In"}
                      className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                      disabled={loading}
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-slate-400 me-2">
                      Don't have an account ?
                    </span>{" "}
                    <Link
                      to={"/signup"}
                      className="text-black dark:text-white font-bold inline-block"
                    >
                      Sign Up
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
