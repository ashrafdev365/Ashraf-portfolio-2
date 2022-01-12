import { DesktopNavigation } from "../Components/Navigation/DesktopNavigation";
import { Button } from "../Components/Navigation/Button";
import Head from "next/head";
export default function Home() {
  return (
    <>
    <Head>
      <title>Welcome To My Portfolio</title>
    </Head>
      <header>
        <div className="home_side_design">
          <div className="back_design"></div>
          <div className="back"></div>
        </div>

        <div className="content">
          <img src="./ashraf.jpg" alt="ff" className="profile_img" />
          <div>
            <h1>
              <span>+ Hi, I’m Ashraf.</span>
              <br />
              Web develper
            </h1>
            <p>
              I'm a Front-end developer have a good amount of
              coding experience, I create websites using Javascript, React.js,
              and Next.js. I specialize in creating custom websites. I enjoy the
              web projects that will allow me the opportunity to grow my
              portfolio. I am proficient in Front End Development. Thank You 
            </p>

            <span>
              <a href="https://twitter.com/Ashraf_365" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ashraf-ashraf-297301206/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/ashrafdev365" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://dribbble.com/Ashraf_365" target="_blank">
                <i className="fab fa-dribbble"></i>
              </a>
            </span>
          </div>
        </div>

        <DesktopNavigation />
        <Button name="About Me" link="about" />
      </header>
    </>
  );
}
