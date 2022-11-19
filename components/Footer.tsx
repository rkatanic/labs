import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <div className="m-auto w-full max-w-2xl flex items-end justify-between py-10 border-t border-gray-100 dark:border-gray-800 mt-16 text-sm text-gray-300 dark:text-gray-600">
    <div className="whitespace-nowrap flex-1">© 2022 Radivoje Katanic.</div>
    <div className="flex gap-4">
      <a
        className="hover:text-gray-900 dark:hover:text-gray-200 hover:underline"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/rkatanic"
      >
        GitHub
      </a>
      <a
        className="hover:text-gray-900 dark:hover:text-gray-200 hover:underline"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/radivoje-katanic"
      >
        LinkedIn
      </a>
    </div>
  </div>
);

export default Footer;
