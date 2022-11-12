import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-end justify-between py-8 max-w-5xl my-4 w-full m-auto border-t border-zinc-100 dark:border-zinc-800">
      <div className="text-zinc-400 dark:text-zinc-500 font-thin">
        © 2022 Radivoje Katanic.
      </div>
      <div className="flex gap-6">
        <a href="https://github.com/rkatanic" target="_blank" rel="noreferrer">
          <FaGithub
            className="fill-zinc-400 dark:fill-zinc-500 hover:fill-teal-600 dark:hover:fill-zinc-300 transition-colors"
            size="1.125rem"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/radivoje-katanic"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin
            className="fill-zinc-400 dark:fill-zinc-500 hover:fill-teal-600 dark:hover:fill-zinc-300 transition-colors"
            size="1.125rem"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
