import Footer from "./Footer";
import Header from "./Header";
import MonIcon from "../assets/icons/mon.svg";

const Layout = (props: any): JSX.Element => {
  return (
    <>
      <div className="grid"></div>
      <div className="main">
        <Header />

        <div className="content">
          <div className="line line-left">
            <div className="line-mon-top">
              <MonIcon />
            </div>
            <div className="line-mon-bottom">
              <MonIcon />
            </div>
            <p className="scroll-text scroll-text-top">SCROLL</p>
            <p className="scroll-text scroll-text-bottom">TO TOP</p>
          </div>

          {props.children}

          <div className="line line-right">
            <div className="line-mon-top">
              <MonIcon />
            </div>
            <div className="line-mon-bottom">
              <MonIcon />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
