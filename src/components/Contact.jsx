export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-2xl mx-auto mb-24 px-6 text-left"
    >
      <h3 className="text-3xl font-semibold mb-6 text-pink-400">Get In Touch</h3>
      <div className="space-y-6 text-gray-300">
        <div>
          <h4 className="text-lg font-medium text-white">Email</h4>
          <a
            href="mailto:jaybontawar33@gmail.com"
            className="text-pink-400 hover:underline"
          >
            jaybontawar33@gmail.com
          </a>
        </div>
        <div>
          <h4 className="text-lg font-medium text-white">LinkedIn</h4>
          <a
            href="https://www.linkedin.com/in/jay-bontawar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:underline"
          >
            linkedin.com/in/jay-bontawar
          </a>
        </div>
         <div>
          <h4 className="text-lg font-medium text-white">Github</h4>
          <a
            href="https://github.com/jay26027894"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:underline"
          >
            lhttps://github.com/jay26027894
          </a>
        </div>
      </div>
    </section>
  );
}
