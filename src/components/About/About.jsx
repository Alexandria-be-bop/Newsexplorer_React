import "./About.css";
import author from "../../assets/author.jpg";

function About() {
  return (
    <div className="about">
      <img
        src={author}
        className="about__image"
      ></img>
      <div className="about__info">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          Hello! I’m Liam, a dedicated Fullstack software developer with a
          mastery of a diverse range of development technologies, including
          MongoDB, Express, React, and Node.js. My journey with TripleTen has
          enriching me with invaluable skills and experiences. Collaborating
          with a talented team of five developers during intensive code jams and
          projects like What To Wear and News Explorer has sharpened my ability
          to think critically and creatively in fast-paced environments. This
          experience has instilled in me a confidence in tackling complex
          challenges head-on. I am enthusiastic about leveraging my expertise to
          help potential customers bring their visions to life. Whether it’s
          crafting tailored software solutions, optimizing workflows, or
          providing steadfast support throughout project execution, I am
          committed to delivering results that not only meet but exceed
          expectations.
        </p>
      </div>
    </div>
  );
}

export default About;
