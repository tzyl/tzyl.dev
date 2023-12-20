import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const SectionHeader = ({ children }: Props) => {
  return <h2 className="mb-5 text-xl font-semibold">{children}</h2>;
};

export default SectionHeader;
