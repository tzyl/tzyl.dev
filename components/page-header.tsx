import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PageHeader = ({ children }: Props) => {
  return (
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold md:leading-none mb-12 text-center md:text-left">
      {children}
    </h1>
  );
};

export default PageHeader;
