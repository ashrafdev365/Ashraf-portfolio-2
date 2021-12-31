import { Button } from "../Components/Navigation/Button";
import { DesktopNavigation } from "../Components/Navigation/DesktopNavigation";
import { useState, useEffect } from "react";

const projects = () => {
  const [filter, setfilter] = useState([]);
  const [portal, setportal] = useState(false);
  const [item, setitem] = useState();
  const [color, setcolor] = useState("all");
  const pro = [
    {
      tag: "react",
      id: 1234,
    },
    {
      tag: "design",
      id: 123456,
    },
    {
      tag: "design",
      id: 123445546,
    },
    {
      tag: "react",
      id: 123454546,
    },
    {
      tag: "react",
      id: 125434456,
    },
    {
      tag: "next",
      id: 1234534546,
    },
    {
      tag: "next",
      id: 124353456,
    },
    {
      tag: "next",
      id: 123453434546,
    },
    {
      tag: "Javascript",
      id: 1234534546,
    },
    {
      tag: "Javascript",
      id: 123487456,
    },
    {
      tag: "Javascript",
      id: 123456746,
    },
    {
      tag: "Javascript",
      id: 12345675646,
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
            <div className="projects" onClick={() => handleItme(value.id)}>
              {value.tag}
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
                <div className="detaile">
                  <h2>Personal Project</h2>
                  <i
                    class="far fa-times-circle"
                    onClick={() => setportal(false)}
                  ></i>
                  <ul>
                    <span>
                      <li>
                        <i className="fas fa-user"></i>
                        <span>Name:</span>
                        Project
                      </li>
                      <li>
                        <i className="fas fa-code"></i>
                        <span>Language:</span>
                        React.js, Firebase
                      </li>
                    </span>
                    <span>
                      <li>
                        <i className="fas fa-clipboard-user"></i>
                        <span>Claint:</span>
                        Personal
                      </li>
                      <li>
                        <i className="fas fa-external-link-square-alt"></i>
                        <span>Link:</span>
                        example.com
                      </li>
                    </span>
                  </ul>

                  <div>{value.id}</div>
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
