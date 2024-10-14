/* eslint-disable react/no-unescaped-entities */
import aboutIcon from "../assets/aboutIcon.svg"
const About = () => {
  return (
    <section className="about__container" id="about">
        <h2 className="about__title">About</h2>
        <div className="about__content">
            <img src={aboutIcon} alt="aboutImage" className="about__img" />
            <ul className="about__items">
                <li className="about__item">
                <i className="fa-solid fa-arrow-pointer"></i>
                    <div>
                        <h3>Frontend Developer</h3>
                        <p>I'm frontent developer with experience in building responsive and optimized websites</p>
                    </div>
                </li>
                <li className="about__item">
                <i className="fa-solid fa-computer"></i>
                <div>
                        <h3>Backend Developer</h3>
                        <p>I have expertise in Flask for building efficient APIs.Skilled in ntegration of third-party services.</p>
                    </div>
                </li>
                <li className="about__item">
                <i className="fa-solid fa-database"></i>
                <div>
                        <h3>Database Managment</h3>
                        <p>Experienced in MySQL and PostgreSQL, currently working on database management projects.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>

  )
}

export default About