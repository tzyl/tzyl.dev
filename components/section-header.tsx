import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const SectionHeader = ({ children }: Props) => {
  return <h2 className="font-semibold text-xl mb-5">{children}</h2>;
};

export default SectionHeader;
