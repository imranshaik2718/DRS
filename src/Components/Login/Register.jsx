import React, { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        profilePic: reader.result, // base64 string
      }));
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword, profilePic } = formData;

    if (!fullName || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const alreadyExists = users.find((user) => user.email === email);
    if (alreadyExists) {
      setError("User with this email already exists.");
      return;
    }

    users.push({ fullName, email, password, profilePic });
    localStorage.setItem("users", JSON.stringify(users));

    setSuccess("Registered successfully!");
    setError("");
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      profilePic: "",
    });
  };

  return (
    <section className="py-16 px-4 flex justify-center bg-gray-50 min-h-screen items-center">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow-md space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-extralight">Register</h1>
          <p className="text-gray-600 text-sm">Create a new account to get started:</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="ml-1 text-gray-800">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="ml-1 text-gray-800">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="E-mail"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="ml-1 text-gray-800">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="ml-1 text-gray-800">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>

          <div className="text-sm text-gray-600 flex items-center gap-2">
            <input
              type="checkbox"
              id="show-password"
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="show-password" className="cursor-pointer">Show Password</label>
          </div>

          <div>
            <label className="ml-1 text-gray-800">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-700"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}
          {success && <p className="text-sm text-green-600">{success}</p>}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Sign Up
          </button>

          <div className="text-center text-sm text-gray-600 mt-2">
            Already have an account? <a href="/login" className="text-black underline">Login</a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
