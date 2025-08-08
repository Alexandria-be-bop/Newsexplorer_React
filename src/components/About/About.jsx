import "./About.css";

function About() {
  return (
    <div className="about">
      <img src="https://media.licdn.com/dms/image/v2/D4E35AQHwg0Xr9vCPog/profile-framedphoto-shrink_200_200/B4EZg3.aSPGoAc-/0/1753285764585?e=1755284400&v=beta&t=dVYFdMlcrCnN0aBmUTM1SjWZQ5kvdvfzUYhIh2MiFpk" className="about__image"></img>
      <div className="about__info">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know. You
          can also talk about your experience with TripleTen, what you learned
          there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
}

export default About;
