import classNames from "classnames";
import Link from "next/link";

type Props = {
  text: string;
  href: string;
  active: boolean;
};

const NavbarTabLink = ({ text, href, active }: Props) => {
  return (
    <Link
      href={href}
      className={classNames(
        "inline-flex px-3 py-2 font-bold transition-all duration-100 hover:text-green-300",
        active && "underline decoration-4 underline-offset-8",
      )}
    >
      {text}
    </Link>
  );
};

export default NavbarTabLink;
