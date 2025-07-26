"use client";
export default function SignupStepTwo({ formData, setFormData }) {
  return (
    <div className="flex h-screen font-sans">
      {/* Left Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 shadow-xl p-10">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
            Sign UP
          </h1>

          <form className="space-y-6">
            {[
              { key: "frontImage", label: "Upload ID Front Image" },
              { key: "rearImage", label: "Upload ID Rear Image" },
            ].map(({ key, label }) => (
              <div key={key}>
                <label className="block font-medium mb-1 text-black">{label}</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setFormData({ ...formData, [key]: e.target.files[0] })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12 placeholder:text-gray-300 text-black"
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-xl hover:bg-indigo-600 transition"
            >
              Submit
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
          src="/background2.jpg"
          alt="Visual"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
