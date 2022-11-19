import Footer from "./Footer";
import Header from "./Header";
import ScrollIndicator from "./ScrollIndicator";
import ThemeSwitch from "./ThemeSwitch";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props): JSX.Element => (
  <div className="dark:bg-gray-900 min-h-screen flex flex-col px-6 xl:px-0">
    <div className="fixed inset-0 h-8 bg-gradient-to-b dark:from-gray-900 z-10"></div>
    <Header />
    <div className="m-auto max-w-2xl w-full h-full flex-1 relative">
      <ScrollIndicator />
      <div className="max-w-2xl">{children}</div>
      <div className="absolute top-0 -right-16 w-0 h-full">
        <div className="sticky top-10 flex flex-col gap-2.5">
          <ThemeSwitch />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Layout;
