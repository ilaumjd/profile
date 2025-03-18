import Link from "next/link";
import React from "react";

export default function Resume() {
  const companies = [
    {
      name: "CoLearn (PT IQ Edukasi)",
      link: "https://colearn.id",
      position: "Senior Software Engineer",
      year: "Oct 2023 - Present",
      items: [
        "Migrated half (and still counting) of mobile native codes into React Native as web components and maintain interoperability with the existing native iOS/Android app, while also adding code push capabilities for instant update without app store review.",
        "Migrated and automated live class reminder push notification from a paid service into a free and fully automated service using Firebase Cloud Messaging and Cloud Functions without any backend dependencies, removing manual operational effort and reducing human errors.",
        "Implemented data caching utilizing AWS Lambda and S3, reducing backend scaling costs and app load time by 50%.",
        "Provided technical mentorship to junior engineers.",
      ],
    },
    {
      name: "CoLearn (PT IQ Edukasi)",
      link: "https://colearn.id",
      position: "Product Engineer",
      year: "Jan 2022 - Sep 2023",
      items: [
        "Collaborated on planning and user experience design for delivering product stories on a live classroom-based app.",
        "Integrated CI/CD pipeline and automated common code review chores.",
        "Developed automation scripts for development tooling setup to maintain consistency across the team members.",
        "Implemented unit testing and integrated crash reporting, maintaining a 99.9% crash-free app.",
        "Engineered a real-time Q&A feature integrated with Zoom Meeting for live classroom sessions.",
      ],
    },
    {
      name: "PT Aku Pintar Indonesia",
      link: "https://akupintar.id",
      position: "iOS & Android Developer",
      year: "Feb 2019 - Jun 2021",
      items: [
        "Developed CRUD Native iOS and Native Android education app.",
        "Implemented: search and filtering, payments, real time messaging, graphical charts, push notifications, single sign-on, a/b testing, analytics tracking, etc.",
      ],
    },
  ];
  return (
    <section className="mt-10">
      <h2 className="text-3xl font-semibold mb-6">Resume</h2>

      {/* Education Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-medium mb-2">Education</h3>
        <span className="text-lg mb-2">
          <strong>Institut Teknologi Sepuluh Nopember (ITS) </strong>
          (2014 - 2019)
        </span>
        <ul className="list-disc list-inside ml-5">
          <li className="mb-1">
            <strong>Major: </strong>
            <span>{`Computer Science, Bachelor's degree`}</span>
            <strong> (GPA 3.6/4.0)</strong>
          </li>
          <li>
            <strong>Selected coursework: </strong>
            <span>Algorithm & Data Structures, Software Engineering.</span>
          </li>
        </ul>
      </div>

      {/* Experience Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-medium">Experience</h3>
        {companies.map((company, index) => (
          <div
            className="mt-4 flex flex-col md:flex-row border border-gray-300 p-4 md:p-6 rounded-lg"
            key={index}
          >
            <div className="md:w-1/2">
              <strong className="text-2xl">{company.name}</strong>
              <br />
              <Link
                className="text-blue-500 italic mt-2 hover:underline"
                href={company.link}
              >
                {company.link}
              </Link>
              <div className="mt-2 text-lg font-semibold">
                {company.position}
              </div>
              <div>{company.year}</div>
            </div>
            <div className="md:w-1/2 mt-2 md:mt-0">
              <ul className="list-disc ml-10">
                {company.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
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
