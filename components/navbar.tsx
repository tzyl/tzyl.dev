import Link from "next/link";
import { useRouter } from "next/router";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import NavbarIconLink from "./navbar-icon-link";
import NavbarTabLink from "./navbar-tab-link";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex flex-wrap items-center pt-8 pb-8">
      <div className="flex items-center">
        <Link href="/">
          <a className="mr-2 font-bold">tzyl</a>
        </Link>
        <NavbarIconLink
          iconComponent={FiGithub}
          href="https://github.com/tzyl"
          title="GitHub"
        />
        <NavbarIconLink
          iconComponent={FiLinkedin}
          href="https://www.linkedin.com/in/timothyleung95"
          title="LinkedIn"
        />
        <NavbarIconLink
          iconComponent={FiMail}
          href="mailto:me@tzyl.dev"
          title="Email"
        />
      </div>
      <div className="ml-auto flex flex-row items-center">
        <NavbarTabLink text="Home" href="/" active={router.pathname === "/"} />
        <NavbarTabLink
          text="Blog"
          href="/blog"
          active={router.pathname.startsWith("/blog")}
        />
      </div>
    </nav>
  );
};

export default Navbar;
