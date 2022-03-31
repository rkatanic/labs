import type { InferGetStaticPropsType } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { PROJECTS } from "../projects";

const Home = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <div className="grid"></div>
      <div className="main">
        <div className="content">
          <Header />
          <div className="home-headline">
            <h3 className="home-headline-title">Labs</h3>
            <p className="home-headline-desc">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  return {
    props: {
      projects: PROJECTS,
    },
  };
};
