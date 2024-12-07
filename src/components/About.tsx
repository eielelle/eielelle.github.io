import Divider from "./Divider";

function About() {
  return (
    <section
      id="about"
      className="flex justify-center items-center min-h-screen"
    >
      <div className="grid grid-cols-2 gap-8">
        <div>
          <Divider number={"01"} title={"About Me"} />
          <p>
            Hello! My name is Eleazar, and I enjoy creating things that live on the internet. My journey in web development started back in 2019 as a hobby. It turns out that hobby quickly turned into passion as I learned HTML, CSS, and JavaScript. Over the years, I've honed my skills in front-end and back-end technologies, building everything from simple websites to more complex web applications.
          </p>
          <br />
          <p>
          I recently graduated with my Bachelor of Science in Information Technology (BSIT), and I'm excited to continue my learning and growth in the tech field. I'm passionate about exploring new technologies and staying updated with the latest trends in web development.
          </p>
          <br />
          <p>In my spare time, you can find me working on personal projects, reading, listening to JPop, hanging out with my friends, or running around Hyrule searching for Korok seeds.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-6">
            Tech stacks I'm currently working on:
          </h2>
          <ul className="grid grid-cols-2 grid-rows-2 gap-3">
            <div className="bg-white text-black p-4">
              <strong>Front-End Development</strong>
              <li>HTML, CSS, JS</li>
              <li>Typescript</li>
              <li>Tailwind</li>
              <li>React</li>
              <li>Svelte</li>
            </div>

            <div className="bg-white text-black p-4">
              <strong>Back-End Development</strong>
              <li>Express JS</li>
              <li>Ruby on Rails</li>
              <li>Next.js</li>
            </div>

            <div className="bg-white text-black p-4">
              <strong>Database</strong>
              <li>MSSql</li>
              <li>Postgresql</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </div>

            <div className="bg-white text-black p-4">
              <strong>Other</strong>
              <li>Firebase</li>
              <li>Pocketbase</li>
              <li>C#, Java</li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
  }

export default About;
