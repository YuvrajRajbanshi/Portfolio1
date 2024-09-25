import Pro1 from "../../public/Project1.png";
import pro2 from "../../public/Project02.png";

function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: Pro1,
      name: "Bellavita - Refreshed brand identity",
      description:
        "Revamped brand strategy to better align brand identity with market positioning, focusing on a more cohesive tone of voice and visual style. Addressed inconsistencies between the brand's sophisticated yet approachable personality and its current communication channels. Introduced a refined color palette and font selection to reflect luxury and elegance while remaining warm and inviting. Enhanced UI/UX design to blend premium and accessible elements, improving overall brand perception and consistency.",
    },
    {
      id: 2,
      logo: pro2,
      name: "Kharab Chai",
      description:
        "Developed a comprehensive strategy to enhance expense and investment approaches by analyzing the business’s consumer profile. Improved café service and ambiance through menu recommendations, infrastructure enhancements, and cutlery updates aligned with brand identity. Crafted a content marketing strategy for social media, including brand design guidelines, voice and personality suggestions, and creative assets to strengthen both online and offline marketing efforts.",
    },
  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        {/* <span className="underline font-semibold">Featured Projects</span> */}
        <div className="flex justify-center my-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cardItem.map(({ id, logo, name, description }) => (
              <div
                className="w-[300px] border-2 rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
                key={id}
              >
                <img
                  src={logo}
                  className="w-[300px] h-[120px] p-1 border-2"
                  alt={name}
                />
                <div>
                  <div className="px-2 font-bold text-xl mb-2">{name}</div>
                  <p
                    className="px-2 text-gray-700 text-justify"
                    style={{
                      wordSpacing: "0.05em",
                      hyphens: "auto",
                    }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
