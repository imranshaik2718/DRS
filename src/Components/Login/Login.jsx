import React, { useState } from "react";

const Login = () => {
  const [showRecover, setShowRecover] = useState(false);

  return (
    <section className="py-16 px-4 flex justify-center bg-gray-50 min-h-screen items-center">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow-md">
        {!showRecover ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl  font-extralight  ">Login</h1>
              <p className="text-gray-600 text-sm">
                Enter your email and password to login:
              </p>
            </div>
            <form className="space-y-4">
              <div className="relative">
                <h1 className="ml-1 text-gray-800">Email </h1>
                <input
                  type="email"
                  required
                  placeholder="E-mail"
                  className="w-full border border-gray-300 rounded px-3 pt-2 pb-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div className="relative">
                <h1 className="ml-1 text-gray-800">Password </h1>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />

                <div className="text-right mt-1">
                  <button
                    type="button"
                    onClick={() => setShowRecover(true)}
                    className="text-xs text-gray-400 hover:text-black"
                  >
                    Forgot your password?
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
              >
                Login
              </button>
              <div className="text-center text-sm text-gray-600 mt-2">
                Don't have an account?{" "}
                <a href="/account/register" className="text-black underline">
                  Sign up
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold">Recover Password</h1>
              <p className="text-gray-600 text-sm">
                Enter your email to recover your password:
              </p>
            </div>
            <form className="space-y-4">
              <div className="relative">
                <h1 className="ml-1 text-gray-800">Email </h1>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="E-mail"
                  className="w-full border border-gray-300 rounded px-3 pt-2 pb-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
              >
                Recover
              </button>
              <div className="text-center text-sm text-gray-600 mt-2">
                Remember your password?{" "}
                <button
                  type="button"
                  onClick={() => setShowRecover(false)}
                  className="text-black underline"
                >
                  Back to login
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

    </section>
  );
};

export default Login;
