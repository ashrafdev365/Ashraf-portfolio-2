import { DesktopNavigation } from "../Components/Navigation/DesktopNavigation";
import { useState } from "react";
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
      <h1 className="heading">
        Contact <span>Me</span>
      </h1>
      <main className="contact">
        <section>
          <h2>don't br shy!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur amet, adipisicing elit. Quis,
            cupiditate dolor. Provident, sit! Sequi in recusandae, inventore
            molestias, voluptates
          </p>

          <div>
            <i className="fas fa-envelope-open"></i>
            <span>
              <h3>Email</h3> <p>ashrafdev365@gmail.com</p>
            </span>
          </div>

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
        </section>

        <form action="POST" onSubmit={handleSubmit}>
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
