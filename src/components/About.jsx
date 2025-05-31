import ScrambledText from "./ScrambledText";

export default function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto mb-24 px-6 text-left">
      <h3 className="text-3xl font-semibold mb-4 text-pink-400">About Me</h3>
      <ScrambledText
        className="scrambled-text-demo text-pink-400 " 
        radius={70}
        duration={1.2}
        speed={0.5}
        scrambleChars={".:"}>
        🚀 Aspiring Software Developer | Web Dev Enthusiast | Problem-Solver in
        Progress Hey there! I'm Jay Bontawar, passionate about turning coffee
        ☕ and code 💻 into user-friendly websites. With hands-on experience in
        HTML, CSS, JavaScript, C, and C++, I'm diving deep into full stack
        development. I've built several interactive, real-world web projects and
        love bringing ideas to life through clean code and creative UI. Beyond
        the screen, I’ve honed leadership and teamwork skills as Vice President
        of  Nexus Forum and Co-Organizer of Techotsav. Whether it's debugging at
        2 AM or brainstorming with a team, I’m all in. Detail-driven, adaptable,
        and always eager to learn something new.
      </ScrambledText>
     
    </section>
  );
}
