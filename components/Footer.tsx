import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center justify-between py-8 max-w-5xl my-4 w-full m-auto border-t border-zinc-800">
      <div className="text-zinc-500">© 2022 Radivoje Katanic.</div>
      <div className="flex gap-6">
        <a href="https://github.com/rkatanic" target="_blank">
          <FaGithub
            className="fill-zinc-500 hover:fill-zinc-300 transition-colors"
            size="1.25rem"
          />
        </a>
        <a href="https://www.linkedin.com/in/radivoje-katanic" target="_blank">
          <FaLinkedin
            className="fill-zinc-500 hover:fill-zinc-300 transition-colors"
            size="1.25rem"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
