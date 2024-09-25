import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p className="text-justify">
          As a marketer with technical background, learning about advancements
          in digital marketing and trends excites me. I try to comprehend
          requirements, iterate strategic solutions and complete the loop with
          analytics.
        </p>
        <br />
        <h1 className="text-blue-600 font-semibold text-xl">Education</h1>
        <span className="text-justify">
          <ul className="list-disc ml-7">
            <li>
              MasterCamp in Strategic Marketing and AI - Master's Union x
              Schbang.
            </li>
            <li>Bachelor of Electronics and Communication engineering.</li>
          </ul>
        </span>
        <br />
        <br />
        <h1 className="text-blue-600 font-semibold text-xl">Interests</h1>
        <span className="text-justify">
          <ul className="list-disc ml-7">
            <li>
              Conduct market research to identify opportunities and to customise
              campaigns.
            </li>
            <li>Developing and executing digital campaigns .</li>
            <li>Analyse data to measure performance.</li>
            <li>YouTube and Instagram Analytics.</li>
            <li>
              Embody one team mentality and Collaborate with teams to produce
              the best outcome.
            </li>
            <li>Google Ads.</li>
          </ul>
        </span>
        <br />
        <h1 className="text-blue-600 font-semibold text-xl">Certifications</h1>
        <span>
          I achived below all the certificate during my college.
          <br />
          <br />
          <ul className="list-disc ml-7">
            <li>Google Fundamentals of Digital Marketing.</li>
            <li>Google Ads Measurement certification.</li>
            <li>Google Ads display certification.</li>
          </ul>
        </span>
        <br />
      </div>
    </div>
  );
}

export default About;
