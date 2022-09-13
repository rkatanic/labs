import {getAllProjects} from "../lib/api";
import {Project} from "../types/project";
import {FiMenu} from 'react-icons/fi';

type Props = {
    projects: Project[];
};

const Home = ({projects} : Props) : JSX.Element => {
    const handleMailTo = () : void => {
        window.location.href = "mailto:k.rade313@gmail.com";
    };

    return (
        <div className="home h-screen bg-black p-8">
            <div className="border-2 h-full border-gray-800 p-8">
                <div className="mb-2 flex gap-4 justify-between items-center">
                    <span className="text-gray-200 font-medium text-2xl flex items-baseline m-0 p-0 gap-2">
                        <div className="border-[3px] rounded-full border-white w-4 h-4"></div>Garden</span>
                    <FiMenu size="1.25rem" className="stroke-gray-50"/>
                </div>
                <div className="grid h-full">
                    <div className="m-auto text-center">
                        <h1 className="text-gray-50 text-5xl font-semibold uppercase tracking-widest mb-2">Digital garden</h1>
                        <h3 className="text-gray-300 text-3xl font-light tracking-wide">This is space for ideas to grow,
                            <br/>
                            playground for personal tools & experiments.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

export const getStaticProps = async () => {
    const projects = getAllProjects([
        "title",
        "slug",
        "creationDate",
        "number",
        "activity",
    ]);

    return {props: {
            projects
        }};
};
