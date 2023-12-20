import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PageHeader = ({ children }: Props) => {
  return (
    <h1 className="mb-12 text-center text-5xl font-bold md:text-left md:text-6xl lg:text-7xl">
      {children}
    </h1>
  );
};

export default PageHeader;
