import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showRecover, setShowRecover] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState({ error: "", success: "" });
  const [recoverEmail, setRecoverEmail] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (user) => user.email === formData.email && user.password === formData.password
    );

    if (matchedUser) {
      setMessage({ success: "Login successful!", error: "" });
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));

      setTimeout(() => {
        navigate("/Main", { state: { userName: matchedUser.fullName || matchedUser.email } });
      }, 1000);
    } else {
      setMessage({ error: "Invalid email or password", success: "" });
    }
  };

  const handleRecover = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.some((user) => user.email === recoverEmail);

    if (exists) {
      setMessage({ success: "Password reset link sent!", error: "" });
    } else {
      setMessage({ error: "Email not found", success: "" });
    }

    setRecoverEmail("");
  };

  return (
    <section className="py-16 px-4 flex justify-center bg-gray-50 min-h-screen items-center">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow-md">
        {!showRecover ? (
          <div className="space-y-6">
            <h1 className="text-2xl font-extralight">Login</h1>
            <form className="space-y-4" onSubmit={handleLogin}>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Password"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <div className="text-right text-xs">
                <button
                  type="button"
                  onClick={() => {
                    setShowRecover(true);
                    setMessage({ error: "", success: "" });
                  }}
                  className="text-gray-400 hover:text-black"
                >
                  Forgot password?
                </button>
              </div>

              {message.error && <p className="text-sm text-red-600">{message.error}</p>}
              {message.success && <p className="text-sm text-green-600">{message.success}</p>}

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
              >
                Login
              </button>

              <div className="text-center text-sm text-gray-600 mt-2">
                Don't have an account?{" "}
                <a href="/register" className="text-black underline">
                  Sign up
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold">Recover Password</h1>
            <form className="space-y-4" onSubmit={handleRecover}>
              <input
                type="email"
                name="email"
                required
                value={recoverEmail}
                onChange={(e) => setRecoverEmail(e.target.value)}
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              {message.error && <p className="text-sm text-red-600">{message.error}</p>}
              {message.success && <p className="text-sm text-green-600">{message.success}</p>}

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
              >
                Recover
              </button>

              <div className="text-center text-sm text-gray-600 mt-2">
                Remember password?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setShowRecover(false);
                    setMessage({ error: "", success: "" });
                  }}
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
