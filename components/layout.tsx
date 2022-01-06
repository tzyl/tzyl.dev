import Footer from "./footer";
import Meta from "./meta";
import Navbar from "./navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="flex flex-col min-h-screen max-w-screen-lg mx-auto px-5 text-gray-800">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
