import classNames from "classnames";
import Link from "next/link";

type Props = {
  text: string;
  href: string;
  active: boolean;
};

const NavbarTabLink = ({ text, href, active }: Props) => {
  return (
    <Link href={href}>
      <a
        className={classNames(
          "inline-flex px-3 py-2 font-bold hover:text-green-300 transition-all duration-100",
          active && "underline underline-offset-8 decoration-4"
        )}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavbarTabLink;
