import { Button } from "../Components/Navigation/Button";
import { DesktopNavigation } from "../Components/Navigation/DesktopNavigation";
import { useState, useEffect } from "react";
import Head from "next/head";
const projects = () => {
  const [filter, setfilter] = useState([]);
  const [portal, setportal] = useState(false);
  const [item, setitem] = useState();
  const [color, setcolor] = useState("all");
  const pro = [
    {
      img: "ddfd.jpg",
      name: "Marketing Agency",
      lang: "Next.js, SCSS, Firebase",
      claint: "Personal",
      link: "example",
      tag: "next",
      id: 1234,
    },
    {
      img: "Hdsfome-min.png",
      name: "E-commerce",
      lang: "Next.js, SCSS, Firebase",
      claint: "Client",
      link: "example",
      tag: "next",
      id: 15454523456,
    },
    {
      img: "Desfsdfsktop product-min.png",
      name: "E-commerce",
      lang: "Next.js, SCSS, Firebase",
      claint: "Client",
      link: "example",
      tag: "next",
      id: 123456,
    },
    {
      img: "Desktop prsdfsoduct detaile-min.png",
      name: "E-commerce",
      lang: "Next.js, SCSS, Firebase",
      claint: "Client",
      link: "example",
      tag: "next",
      id: 12345543456,
    },
    {
      img: "Grogup 10-min.png",
      name: "E-commerce",
      lang: "Figma, HTML, CSS",
      claint: "Personal",
      link: "example",
      tag: "design",
      id: 12543344456,
    },
    {
      img: "Group 34-min.png",
      name: "Free Icons",
      lang: "React.js, SCSS, APIs",
      claint: "Personal",
      link: "example",
      tag: "react",
      id: 1234562534546,
    },
    {
      img: "hfdsdeader-min.png",
      name: "Portfolio",
      lang: "React.js, CSS, Firebase",
      claint: "Personal",
      link: "example",
      tag: "react",
      id: 12435763456,
    },
    {
      img: "sdfsdf.png",
      name: "Blog",
      lang: "React.js, SCSS, Firebase",
      claint: "Client",
      link: "example",
      tag: "react",
      id: 12345387434546,
    },
    {
      img: "sdfsadf.png",
      name: "Portfolio",
      lang: "Javascript, CSS, HTML, Firebase",
      claint: "Personal",
      link: "example",
      tag: "Javascript",
      id: 1234534546,
    },
    {
      img: "sfd.png",
      name: "Blog",
      lang: "Next.js, SCSS, Firebase",
      claint: "Personal",
      link: "example",
      tag: "next",
      id: 123487456,
    },
    {
      img: "sdfs.png",
      name: "SASS Product",
      lang: "Next.js, SCSS, Firebase, APIs",
      claint: "Personal",
      link: "example",
      tag: "next",
      id: 12323456746,
    },
    {
      img: "hedfg.png",
      name: "Banking Agency",
      lang: "Javascript, CSS, HTML",
      claint: "Personal",
      link: "example",
      tag: "Javascript",
      id: 12345096746,
    },
    {
      img: "zv.png",
      name: "Weather",
      lang: "Javascript, CSS, HTML",
      claint: "Personal",
      link: "example",
      tag: "Javascript",
      id: 12343456746,
    },
    {
      img: "tre.png",
      name: "Home Rant",
      lang: "Figma, CSS, HTML",
      claint: "Personal",
      link: "example",
      tag: "design",
      id: 12387456746,
    },
  ];

  //filter data
  const handleFilter = (name) => {
    const data = pro.filter((val) => {
      return name != "all" ? val.tag == name : pro;
    });
    return setfilter(data);
  };
  const handleItme = (id) => {
    setitem(id);
    setportal(true);
  };
  useEffect(() => {
    setfilter(pro);
  }, []);

  return (
    <>
    <Head>
      <title>Recent Projects</title>
    </Head>
      <h1 className="work_heading">
        <span>My </span> Recent Work
      </h1>

      <ul className="project_cetagory">
        <button onClick={() => handleFilter("all")}>All</button>
        <button onClick={() => handleFilter("react")}>React.js</button>
        <button onClick={() => handleFilter("next")}>Next.js</button>
        <button onClick={() => handleFilter("Javascript")}>Javascript</button>
        <button onClick={() => handleFilter("design")}>Design</button>
      </ul>

      <section className="project_section">
        {filter.map((value) => {
          return (
            <div
              className="projects"
              onClick={() => handleItme(value.id)}
              key={value.id}
            >
              <img src={value.img} alt="ashraf" />
            </div>
          );
        })}
      </section>

      {portal && (
        <section className="project_portal">
          {filter
            .filter((val) => {
              return val.id == item;
            })
            .map((value) => {
              return (
                <div className="detaile" key={value.id}>
                  <h2>Personal Projects</h2>
                  <i
                    class="far fa-times-circle"
                    onClick={() => setportal(false)}
                  ></i>
                  <ul>
                    <span>
                      <li>
                        <i className="fas fa-user"></i>
                        <span>Name:</span>
                        {value?.name}
                      </li>
                      <li>
                        <i className="fas fa-code"></i>
                        <span>Language:</span>
                        {value.lang}
                      </li>
                    </span>
                    <span>
                      <li>
                        <i className="fas fa-clipboard-user"></i>
                        <span>Claint:</span>
                        {value.claint}
                      </li>
                      <li>
                        <i className="fas fa-external-link-square-alt"></i>
                        <span>Link:</span>
                        {value.link}
                      </li>
                    </span>
                  </ul>

                  <div>
                    <img src={value.img} alt="ashraf" />
                  </div>
                </div>
              );
            })}
        </section>
      )}
      <DesktopNavigation />
    </>
  );
};

export default projects;
