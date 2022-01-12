import { DesktopNavigation } from "../Components/Navigation/DesktopNavigation";
import { useState } from "react";
import Head from "next/head";
const contact = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  let name, value;
  const handleForm = (e) => {
    name = e.target.name;
    value = e.target.value;
    setform({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    if (name && email && subject && message) {
      const getData = await fetch(
        "https://creative-portfolio-57669-default-rtdb.firebaseio.com/contact.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, subject, message }),
        }
      );
      console.log("data send");
      setform({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      alert("pleace fillup all the fileds");
    }
  };
  return (
    <>
      <Head>
        <title>Contant Me</title>
      </Head>
      <h1 className="heading">
        Contact <span>Me</span>
      </h1>
      <main className="contact">
        <section>
          <h2>don't be shy!</h2>
          <p>
            If you are interested to work with me place contact me, I'm
            interested to work with with you, if you have any doubt you can also
            check my Twitter and Github account
          </p>

          <div
            onClick={() =>
              navigator.clipboard.writeText("ashrafdev365@gmail.com")
            }
          >
            <i className="fas fa-envelope-open"></i>
            <span>
              <h3>Email</h3> <p>ashrafdev365@gmail.com</p>
            </span>
          </div>

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
        </section>

        <form action="POST" method="POST" onSubmit={handleSubmit}>
          <span>
            <input
              type="name"
              name="name"
              onChange={handleForm}
              value={form.name}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              onChange={handleForm}
              value={form.enail}
              placeholder="Email"
            />
          </span>
          <input
            type="text"
            className="subject"
            name="subject"
            onChange={handleForm}
            value={form.subject}
            placeholder="Subject"
          />
          <textarea
            name="message"
            onChange={handleForm}
            value={form.message}
            placeholder="Message"
          ></textarea>

          <button type="submit">
            <span>Send</span> <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </main>
      <DesktopNavigation />
    </>
  );
};

export default contact;
