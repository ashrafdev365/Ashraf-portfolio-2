import { DesktopNavigation } from "../Components/Navigation/DesktopNavigation";

const contact = () => {
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
            molestias, voluptates{" "}
          </p>

          <div>
            <i className="fas fa-envelope-open"></i>
            <span>
              {" "}
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

        <form action="">
          <span>
            <input type="name" name="" placeholder="Name" />
            <input type="email" name="" placeholder="Email" />
          </span>
          <input
            type="text"
            className="subject"
            name=""
            placeholder="Subject"
          />
          <textarea name="" placeholder="Message"></textarea>

          <button>
            <span>Send</span> <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </main>
      <DesktopNavigation />
    </>
  );
};

export default contact;
