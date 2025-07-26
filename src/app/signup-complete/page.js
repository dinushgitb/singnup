"use client";
export default function SignupComplete({ onBack }) {
  return (
    <div className="flex h-screen font-sans">
      {/* Left Message Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white shadow-xl p-10">
        <div className="w-full max-w-md text-center">
          <p className="text-base text-black mb-8">
            Thank you for submitting your documents. <br />
            We will review your profile and, once approved, send your User ID via email. <br />
            After receiving your User ID, you can log in using it along with the password you created earlier.
            Please keep an eye on your inbox.
          </p>

          <button
            onClick={onBack}
            className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-xl hover:bg-indigo-600 transition"
          >
            Back
          </button>

          <p className="text-xs text-black mt-6 font-semibold">
            Powered By Prawncare
          </p>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="hidden md:block w-1/2">
        <img
          src="/background2.jpg"
          alt="Confirmation Visual"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
