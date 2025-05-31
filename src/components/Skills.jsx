import AnimatedList from "./AnimatedList";

const skills = [
  // Technical Skills
  "C",
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Node.js",
  "Figma",
  "Git",
  "GitHub",
  "REST APIs",

  // Soft Skills
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Time Management",
  "Adaptability",
  "Continuous Learning",
  "Critical Thinking",
];

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold text-center text-purple-400 mb-12">
        Skills
      </h2>
      <div className="flex justify-center">
        <AnimatedList
          items={skills}
          onItemSelect={(item) => console.log("Selected:", item)}
          showGradients={false}
          enableArrowNavigation={true}
          displayScrollbar={true}
        />
      </div>
    </section>
  );
}
