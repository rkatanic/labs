import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <div className="m-auto w-full max-w-2xl flex items-center justify-between py-10">
    <div className="text-gray-400 dark:text-gray-500 text-sm">
      © 2022 Radivoje Katanic.
    </div>
    <div className="flex gap-6">
      <a href="https://github.com/rkatanic" target="_blank" rel="noreferrer">
        <FaGithub
          className="fill-gray-400 dark:fill-gray-500 hover:fill-black dark:hover:fill-gray-300 transition-colors"
          size="1rem"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/radivoje-katanic"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin
          className="fill-gray-400 dark:fill-gray-500 hover:fill-black dark:hover:fill-gray-300 transition-colors"
          size="1rem"
        />
      </a>
    </div>
  </div>
);

export default Footer;
