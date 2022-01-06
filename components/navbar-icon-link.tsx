import { IconType } from "react-icons";

type Props = {
  iconComponent: IconType;
  href: string;
  title: string;
};

const ICON_SIZE = 20;

const NavbarIconLink = ({ iconComponent, href, title }: Props) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {iconComponent({
        size: ICON_SIZE,
        title,
        className: "mx-1 hover:text-green-300 transition-all duration-100",
      })}
    </a>
  );
};

export default NavbarIconLink;
