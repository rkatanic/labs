import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="m-auto my-32 max-w-5xl flex flex-col items-center gap-12">
      <div className="m-auto text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-4 text-zinc-800 dark:text-zinc-100">
          Get in touch.
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-xl font-light">
          Have a question, or just want to say hello? Feel free to do so.
        </p>
        <div className="flex justify-center gap-6 mt-6">
          <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-white dark:bg-zinc-800/25 dark:hover:border-teal-700 hover:border-teal-500 cursor-pointer group border-zinc-200 dark:border-zinc-700/50 mb-2 shadow-md shadow-zinc-100 dark:shadow-zinc-900/20">
            <FaGithub
              className="dark:fill-zinc-400 fill-zinc-500 group-hover:fill-teal-500"
              size="1.25rem"
            />
          </div>
          <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-white dark:bg-zinc-800/25 dark:hover:border-teal-700 hover:border-teal-500 cursor-pointer group border-zinc-200 dark:border-zinc-700/50 mb-2 shadow-md shadow-zinc-100 dark:shadow-zinc-900/20">
            <FaLinkedin
              className="dark:fill-zinc-400 fill-zinc-500 group-hover:fill-teal-500"
              size="1.25rem"
            />
          </div>
          <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-white dark:bg-zinc-800/25 dark:hover:border-teal-700 hover:border-teal-500 cursor-pointer group border-zinc-200 dark:border-zinc-700/50 mb-2 shadow-md shadow-zinc-100 dark:shadow-zinc-900/20">
            <IoIosMail
              className="dark:fill-zinc-400 fill-zinc-500 group-hover:fill-teal-500"
              size="1.25rem"
            />
          </div>
        </div>
      </div>

      <form action="" className="max-w-md w-full flex flex-col gap-8">
        <input
          placeholder="Name"
          type="text"
          required
          className="bg-transparent border dark:placeholder-zinc-600 border-zinc-200 dark:border-zinc-700/50 dark:text-zinc-200 dark:bg-zinc-800/10 w-full rounded-md p-2 px-4 outline-0 focus:dark:border-teal-600 focus:border-teal-400"
        />
        <input
          placeholder="E-mail"
          type="email"
          required
          className="bg-transparent border dark:placeholder-zinc-600 border-zinc-200 dark:border-zinc-700/50 dark:text-zinc-200 dark:bg-zinc-800/10 w-full rounded-md p-2 px-4 outline-0 focus:dark:border-teal-600 focus:border-teal-400"
        />
        <input
          placeholder="Subject"
          type="text"
          required
          className="bg-transparent border dark:placeholder-zinc-600 border-zinc-200 dark:border-zinc-700/50 dark:text-zinc-200 dark:bg-zinc-800/10 w-full rounded-md p-2 px-4 outline-0 focus:dark:border-teal-600 focus:border-teal-400"
        />
        <textarea
          rows={5}
          placeholder="Name"
          required
          className="bg-transparent border dark:placeholder-zinc-600 border-zinc-200 dark:border-zinc-700/50 dark:text-zinc-200 dark:bg-zinc-800/10 w-full rounded-md p-2 px-4 outline-0 focus:dark:border-teal-600 focus:border-teal-400"
        />
        <button className="dark:text-zinc-200 font-medium bg-zinc-800 hover:bg-zinc-900 text-zinc-200 dark:bg-teal-900 dark:hover:bg-teal-800 tracking-wider p-2 rounded-full shadow-lg border border-t-0 border-zinc-900 dark:border-teal-800">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
