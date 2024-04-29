import React from "react";

const Team = () => {
  // Dummy data for team members
  const teamMembers = [
    {
      name: "John Doe",
      role: "Software Engineer",
      github: "https://github.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
      image: "sample.jpeg",
    },
    {
      name: "Jane Smith",
      role: "UI/UX Designer",
      github: "https://github.com/janesmith",
      linkedin: "https://www.linkedin.com/in/janesmith",
      image: "sample.jpeg",
    },
    {
        name: "Jane Smith",
        role: "UI/UX Designer",
        github: "https://github.com/janesmith",
        linkedin: "https://www.linkedin.com/in/janesmith",
        image: "sample.jpeg",
      },
      {
        name: "Jane Smith",
        role: "UI/UX Designer",
        github: "https://github.com/janesmith",
        linkedin: "https://www.linkedin.com/in/janesmith",
        image: "sample.jpeg",
      },
      {
        name: "Jane Smith",
        role: "UI/UX Designer",
        github: "https://github.com/janesmith",
        linkedin: "https://www.linkedin.com/in/janesmith",
        image: "sample.jpeg",
      },
  ];

  return (
    <div className="container mx-auto p-6 m-3">
      <h2 className="text-3xl font-bold text-center text-[#7440DE]">Meet the Team!</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden p-4 "
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <div className="flex justify-center mb-4">
                <a
                  href={member.github}
                  className="mr-4"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
