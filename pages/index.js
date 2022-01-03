import { DesktopNavigation } from "../Components/Navigation/DesktopNavigation";
import { Button } from "../Components/Navigation/Button";
export default function Home() {
  return (
    <>
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
              Lorem ipsum dolor sit amet consectetur amet, adipisicing elit.
              Quis, cupiditate dolor. Provident, sit! Sequi in recusandae,
              inventore molestias, voluptates saepe praesentium natus facere
              corporis ex non itaque, tempore illo odit.
            </p>

            <span>
              <a href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="">
                <i className="fab fa-github"></i>
              </a>
              <a href="">
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
