import "./About.css";

function About() {
  return (
    <div className="about">
      <img
        src="https://media.licdn.com/dms/image/v2/D4E35AQHwg0Xr9vCPog/profile-framedphoto-shrink_400_400/B4EZg3.aSPGoAg-/0/1753285764585?e=1756152000&v=beta&t=zjRsHA3lglr80eM5p4qw4Yu6ufcZKOT5Hrq1UEF4K-g"
        className="about__image"
      ></img>
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
