import { Button } from "../Components/Navigation/Button";
import { DesktopNavigation } from "../Components/Navigation/DesktopNavigation";
import Head from "next/head";
const about = () => {
  const lanuage = [
    {
      img: "icons8-javascript.svg",
      name: "Javascript",
    },
    {
      img: "icons8-react-native.svg",
      name: "React.js",
    },
    {
      img: "next-js.svg",
      name: "Next.js",
    },
    {
      img: "cypress.svg",
      name: "Cypress",
    },
    {
      img: "icons8-firebase.svg",
      name: "Firebase",
    },
    {
      img: "icons8-css3.svg",
      name: "CSS3",
    },
    {
      img: "icons8-html-5.svg",
      name: "HTML5",
    },
    {
      img: "scss.svg",
      name: "SCSS",
    },
    {
      img: "icons8-figma.svg",
      name: "Figma",
    },

    {
      img: "icons8-material-ui.svg",
      name: "Metarial UI",
    },

    // {
    //   img: "",
    //   name: "",
    // },
    // {
    //   img: "",
    //   name: "",
    // },
  ];

  return (
    <>
    <Head>
      <title>About Me</title>
    </Head>
      <div className="aboutHeading">
        <h1>
          About <span>Me</span>
        </h1>
        <h2>Resume</h2>
      </div>

      <main className="info">
        <section className="info_section">
          <h2>Personal Info</h2>
          <div>
            <ul className="info1">
              <li>
                <span>First Name:</span> Ashraf
              </li>
              <li>
                <span>Age:</span> 19
              </li>
              <li>
                <span>Tag:</span> Front end Dev
              </li>
              <li>
                <span>Freelancer:</span> Available
              </li>
            </ul>
            <ul>
              <li>
                <span>Last Name:</span> Chowdury
              </li>
              <li>
                <span>Nationality:</span> Bangladesh
              </li>
              <li>
                <span>Language:</span> Bangla, English
              </li>
              <li>
                <span>Project Based:</span> Available
              </li>
            </ul>
          </div>

          <Button name="Contact" link="contact" />
        </section>

        <section className="experiance">
          <div className="box" id="box1">
            <h3>
              2<span>+</span>
            </h3>
            <div></div>
            <p>
              Years Of <span> Experiance</span>
            </p>
          </div>
          <div className="box">
            <h3>
              14<span>+</span>
            </h3>
            <div></div>
            <p>
              Projects <span> Completed</span>
            </p>
          </div>
          <div className="box">
            <h3>
              15<span>+</span>
            </h3>
            <div></div>
            <p>
              Heppy <span> Customers</span>
            </p>
          </div>

          <Button name="Recent Projects" link="projects" />
        </section>
      </main>

      <h3 className="skills">
        <span>My </span>Skills
      </h3>

      <section className="language">
        {lanuage.map((value, index) => {
          return (
            <div key={index}>
              <img src={`./${value.img}`} alt="ashraf" />
              <p>{value.name}</p>
            </div>
          );
        })}
      </section>
      <DesktopNavigation />
    </>
  );
};

export default about;
