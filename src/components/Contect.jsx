import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.svg";
const Contect = () => {
  return (
    <footer className="contact__container" id="contact">
      <div className="contact__text">
        <h3>Contect</h3>
        <p>Feel free to reach out </p>
      </div>
      <ul className="contact__links">
        <li className="contact__link">
          <a href="mailto:saravananr7337@gmail.com" target="__blank">
            <img src={mail} alt="email" />
            saravananr7337@gmail.com
          </a>
        </li>
        <li className="contact__link">
          <a
            href="https://www.linkedin.com/in/saravanan-r-8a0a311b1/"
            target="__blank"
          >
            <img src={linkedin} alt="linked_in" />
            linkedin.com/Saravanan R
          </a>
        </li>
        <li className="contact__link">
          <a href="https://github.com/saravanan73" target="__blank">
            <img src={github} alt="github" />
            github.com/saravanan73
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contect;
