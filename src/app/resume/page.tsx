import Link from "next/link";
import React from "react";
import { IoGlobeOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

export default function Resume() {
  const companies = [
    {
      name: "CoLearn (PT IQ Edukasi)",
      link: "https://colearn.id",
      location: "Remote, Indonesia",
      positions: [
        {
          name: "Senior Software Engineer",
          year: "Oct 2023 - Present",
        },
      ],
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
      location: "Remote, Indonesia",
      positions: [
        {
          name: "Product Engineer",
          year: "Jan 2022 - Sep 2023",
        },
      ],
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
      location: "Surabaya, Indonesia",
      positions: [
        {
          name: "iOS Developer",
          year: "Jan 2020 - Jun 2021",
        },
        {
          name: "Android Developer",
          year: "Feb 2019 - Dec 2019",
        },
      ],
      items: [
        "Developed CRUD Native iOS and Native Android education app.",
        "Implemented: search and filtering, payments, real time messaging, graphical charts, push notifications, single sign-on, a/b testing, analytics tracking, etc.",
      ],
    },
  ];
  return (
    <section className="md:mt-10 md:mb-30">
      <h2 className="text-3xl font-semibold mb-6">Resume</h2>

      {/* Education Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-medium mb-2">Education</h3>

        <div className="mt-4 flex flex-col border border-gray-300 p-4 md:p-6 rounded-lg">
          <span>
            <strong className="text-lg mb-2">
              Institut Teknologi Sepuluh Nopember (ITS){" "}
            </strong>
            (2014 - 2019)
          </span>
          <ul className="list-disc list-inside ml-5">
            <li className="mt-1">
              <strong>Major: </strong>
              <span>{`Computer Science (Informatics), Bachelor's degree`}</span>
              <strong> (GPA 3.6/4.0)</strong>
            </li>
            <li className="mt-1">
              <strong>Selected coursework: </strong>
              <span>Algorithm & Data Structures, Software Engineering.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-6">
        <h3 className="text-2xl font-medium">Working Experiences</h3>
        {companies.map((company, index) => (
          <div
            className="mt-4 flex flex-col md:flex-row border border-gray-300 p-4 md:p-6 rounded-lg"
            key={index}
          >
            <div className="md:w-1/2">
              <strong className="text-2xl">{company.name}</strong>
              <br />
              <Link
                className="text-blue-500 italic mt-2 hover:underline inline-flex items-center"
                href={company.link}
              >
                <IoGlobeOutline className="mr-1" />
                {company.link}
              </Link>
              <br />
              <span className="inline-flex items-center">
                <MdLocationOn className="mr-1" />
                {company.location}
              </span>
              {company.positions.map((pos, idx) => (
                <div className="mt-2" key={idx}>
                  <span className="text-lg font-semibold">{pos.name}</span>
                  <br />
                  {pos.year}
                </div>
              ))}
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
    </section>
  );
}
