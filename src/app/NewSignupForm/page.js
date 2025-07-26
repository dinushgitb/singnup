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
    <div className="flex h-screen font-sans">
      {/* Left Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white shadow-xl p-10">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-8 ">
            Sign UP
          </h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Input Fields */}
            {[
              { label: "Name", name: "serviceId", placeholder: "Name" },
              { label: "Email", name: "email", placeholder: "Email Address" },
              {
                label: "Phone No:",
                name: "phone",
                placeholder: "Phone Number",
              },
            ].map(({ label, name, placeholder }) => (
              <div key={name}>
                <label className="block font-medium mb-1 text-black">{label}</label>
                <input
                  type="text"
                  name={name}
                  value={formData[name]}
                  onChange={(e) =>
                    setFormData({ ...formData, [name]: e.target.value })
                  }
                  placeholder={placeholder}
                  className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder:text-gray-400 placeholder:font-normal"
                />
                {errors[name] && (
                  <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
                )}
              </div>
            ))}

            {/* Password */}
            <div>
              <label className="block font-medium mb-1 text-black">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="Password"
                  className="w-full border rounded-xl px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder:text-gray-400 placeholder:font-normal"
                />
                <img
                  src={showPassword ? "/icons/show.png" : "/icons/hide.png"}
                  alt="Toggle visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  className="w-5 h-5 absolute right-3 top-3 cursor-pointer"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block font-medium mb-1 text-black">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  placeholder="Re-type Password"
                  className="w-full border rounded-xl px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder:text-gray-400 placeholder:font-normal"
                />
                <img
                  src={showConfirmPassword ? "/icons/show.png" : "/icons/hide.png"}
                  alt="Toggle visibility"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="w-5 h-5 absolute right-3 top-3 cursor-pointer"
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
              className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-xl hover:bg-indigo-600 transition"
            >
              Next
            </button>
          </form>
          <p className="text-center text-xs text-black mt-6 font-semibold">
            Powered By Prawncare
          </p>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="hidden md:block w-1/2">
        <img
          src="/home.jpg"
          alt="Water Tech"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
