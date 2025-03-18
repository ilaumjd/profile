import React from "react";

export default function Home() {
  return (
    <section className="text-center mt-10">
      <h2 className="text-4xl font-semibold mb-4">Welcome to My Profile</h2>
      <p className="text-lg text-gray-700">
        Hi! I'm [Your Name], a [Your Profession] based in [Your Location]. I
        specialize in [Your Skills or Interests].
      </p>
      <div className="mt-6">
        <a
          href="/resume"
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          View My Resume
        </a>
      </div>
    </section>
  );
}
