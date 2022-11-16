import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="m-auto max-w-2xl h-full flex-1">
      <div>
        <div className="dark:text-gray-200 text-4xl mb-4 font-semibold">
          Have a question, or just want to say hello?
        </div>
        <div className="dark:text-gray-400 text-lg text-gray-400">
          Feel free to do so. Don't hesitate to ask anything.
        </div>
      </div>
      <div className="my-16">
        <div className="dark:text-gray-500 text-gray-400">write me at:</div>
        <div className="dark:text-gray-200 font-medium text-3xl mt-4">
          rkatanic@outlook.com
        </div>
      </div>
      <div className="">
        <div className="dark:text-gray-500 text-gray-400">or follow me on:</div>
        <div className="flex gap-16">
          <div className="dark:text-gray-200 font-medium text-3xl mt-4">
            GitHub
          </div>
          <div className="dark:text-gray-200 font-medium text-3xl mt-4">
            LinkedIn
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
