/* eslint-disable react/no-unescaped-entities */
import hero from "../assets/hero.jpg"
const Body = () => {
  return <section className="body__container">
    <div className="body__content">
        <h1 className="body__title">Hi I'm Saravanan</h1>
        <p className="body__description">I'm full stack developer with 1.5 years of experience using React,Python,Mysql.Reach out if you'd like to know more</p>
        <a href="mailto:saravananr7337@gmail.com" className="body__contactBtn">Contact Me</a>
    </div>
    <img src={hero} className="hero__img" alt=""/>
    <div className="hero_topBlur"></div>
    <div className="hero_bottomBlur"></div>
  </section>;
};

export default Body;
