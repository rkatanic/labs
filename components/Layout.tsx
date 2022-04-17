import Footer from "./Footer";
import Header from "./Header";
import Background from "./Background";
import Line from "./Line";
import ScrollProgress from "./ScrollProgress";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Background />
      <div className="main">
        <Header />
        <div className="content">
          <ScrollProgress />
          {children}
          <Line orientatiton="vertical" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
