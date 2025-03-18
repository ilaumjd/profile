import React from "react";

export default function Resume() {
  return (
    <section className="mt-10">
      <h2 className="text-3xl font-semibold mb-6">Resume</h2>

      {/* Education Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-medium mb-2">Education</h3>
        <ul className="list-disc list-inside">
          <li>
            <strong>[Degree]</strong> from [University Name] (Year)
          </li>
          {/* Add more education items as needed */}
        </ul>
      </div>

      {/* Experience Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-medium mb-2">Experience</h3>
        <ul className="list-disc list-inside">
          <li>
            <strong>[Job Title]</strong> at [Company Name] (Year - Year)
            <p className="text-gray-700">- [Responsibility or achievement]</p>
          </li>
          {/* Add more experience items as needed */}
        </ul>
      </div>

      {/* Skills Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-medium mb-2">Skills</h3>
        <ul className="list-disc list-inside">
          <li>[Skill 1]</li>
          <li>[Skill 2]</li>
          <li>[Skill 3]</li>
          {/* Add more skills as needed */}
        </ul>
      </div>

      {/* Add more sections (Projects, Certifications, etc.) as needed */}
    </section>
  );
}
