"use client";
import { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    serviceId: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.serviceId) errs.serviceId = "Service ID is required";
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
      errs.email = "Invalid email address";
    if (formData.password.length < 6)
      errs.password = "Password must be at least 6 characters";
    if (formData.confirmPassword !== formData.password)
      errs.confirmPassword = "Passwords do not match";
    if (!formData.phone.match(/^\d{10}$/))
      errs.phone = "Phone must be 10 digits";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <div className="w-full md:w-4/12 p-10 flex flex-col justify-center bg-white shadow-2xl rounded-l-3xl">
        <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
          Sign UP
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            {
              label: "Service ID",
              type: "text",
              name: "serviceId",
              placeholder: "Enter your service ID",
            },
            {
              label: "Email",
              type: "email",
              name: "email",
              placeholder: "Enter your email address",
            },
            {
              label: "Phone Number",
              type: "text",
              name: "phone",
              placeholder: "Enter your phone number",
            },
          ].map(({ label, type, name, placeholder }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              <input
                type={type}
                placeholder={placeholder}
                value={formData[name]}
                onChange={(e) =>
                  setFormData({ ...formData, [name]: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
              />
              {errors[name] && (
                <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
              )}
            </div>
          ))}

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12 placeholder:text-gray-400"
              />
              <img
                src={showPassword ? "/icons/show.png" : "/icons/hide.png"}
                alt="toggle visibility"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 w-5 h-5 cursor-pointer"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-type your password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12 placeholder:text-gray-400"
              />
              <img
                src={
                  showConfirmPassword ? "/icons/show.png" : "/icons/hide.png"
                }
                alt="toggle visibility"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5 w-5 h-5 cursor-pointer"
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-2 rounded-xl transition duration-200"
          >
            Register
          </button>
        </form>
        <p className="text-xs text-center mt-6 text-gray-400">
          Powered By Prawncare
        </p>
      </div>

      <div className="hidden md:block w-8/12">
        <img
          src="/home.jpg"
          alt="Background"
          className="w-full h-full object-cover rounded-r-3xl"
        />
      </div>
    </div>
  );
}
