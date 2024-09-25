function Skills() {
  const cardItem = [
    {
      id: 1,
      name: "Digital Marketing",
      description: (
        <ul className="list-disc list-inside text-left">
          <li>SEO</li>
          <li>Google Ads</li>
          <li>Email Marketing</li>
          <li>Social Media Management</li>
        </ul>
      ),
    },
    {
      id: 2,
      name: "Analytics",
      description: (
        <ul className="list-disc list-inside text-left">
          <li>Google Analytics</li>
          <li>YouTube Analytics</li>
          <li>Instagram Analytics</li>
        </ul>
      ),
    },
    {
      id: 3,
      name: "Technical Skills",
      description: (
        <ul className="list-disc list-inside text-left">
          <li>WordPress</li>
          <li>Salesforce</li>
          <li>Data Visualization</li>
          <li>Excel</li>
        </ul>
      ),
    },
  ];

  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <span className="font-semibold block mb-5">
          I have knowledge in the below technologies.
        </span>
        <div className="flex flex-col items-center space-y-4">
          {/* First Row: 3 Cards with a gap */}
          <div className="flex flex-wrap justify-center gap-8">
            {cardItem.slice(0, 3).map(({ id, name, description }) => (
              <div
                className="bg-white border-2 rounded-lg shadow-lg p-6 cursor-pointer hover:scale-105 duration-300 flex flex-col justify-center items-center text-center w-80 h-64"
                key={id}
              >
                <div className="font-bold text-xl mb-4">{name}</div>
                <div className="flex flex-col justify-start items-start">
                  {description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
