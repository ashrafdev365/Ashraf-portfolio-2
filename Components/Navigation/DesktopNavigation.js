import Link from "next/link";

export const DesktopNavigation = () => {
  return (
    <>
      <div className="desktop_nav">
        <a href="">
          <Link href="/">
            <i className="fas fa-home-lg-alt">
              <span>Home</span>
            </i>
          </Link>
        </a>
        <a href="">
          <Link href="/about">
            <i className="fas fa-user">
              <span>About Me</span>
            </i>
          </Link>
        </a>
        <a href="">
          <Link href="/projects">
            <i className="fas fa-file-chart-pie">
              <span>Projects</span>
            </i>
          </Link>
        </a>
        <a href="">
          <Link href="/contact">
            <i className="fas fa-id-badge">
              <span>Contact Me</span>
            </i>
          </Link>
        </a>
      </div>
    </>
  );
};
