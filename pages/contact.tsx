import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [outcome, setOutcome] = useState("");

  return (
    <div className="m-auto max-w-2xl h-full flex-1">
      <div>
        <div className="dark:text-gray-200 text-3xl mb-4 font-semibold">
          Have a question, or just want to say hello?
        </div>
        <div className="dark:text-gray-300 text-gray-500">
          Feel free to do so. Don&apos;t hesitate to ask anything.
        </div>
      </div>
      {/* <form className="flex flex-col gap-8 my-12 items-end">
        <input
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Your Name"
          type="text"
          className="pb-3 border-b-2 bg-transparent w-full border-gray-100 dark:border-gray-700 outline-0 focus:border-gray-900 dark:focus:border-gray-200 placeholder-gray-300 dark:text-gray-100"
        />

        <input
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="E-mail"
          type="text"
          className="pb-3 border-b-2 bg-transparent w-full border-gray-100 dark:border-gray-700 outline-0 focus:border-gray-900 dark:focus:border-gray-200 placeholder-gray-300 dark:text-gray-100"
        />
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          required
          minLength={6}
          rows={7}
          placeholder="Message"
          className="pb-3 border-b-2 bg-transparent w-full border-gray-100 dark:border-gray-700 outline-0 focus:border-gray-900 dark:focus:border-gray-200 placeholder-gray-300 dark:text-gray-100"
        />
        <div className="flex items-center justify-between w-full">
          <div>
            {outcome &&
              (outcome === "successs" ? (
                <div className="dark:text-blue-300 text-sm">
                  Success! I will respond as soon as possible.
                </div>
              ) : (
                <div className="dark:text-red-400 text-sm">
                  Failed to send e-mail. Please try again later.
                </div>
              ))}
          </div>
          <button
            type="submit"
            className="rounded-full w-40 bg-gray-900 text-gray-200 dark:bg-gray-200 dark:text-gray-900 font-semibold tracking-wide p-2 dark:shadow-black shadow-gray-300 shadow-md"
          >
            Send
          </button>
        </div>
      </form> */}
      <div className="my-8">
        <div className="dark:text-gray-300 text-gray-500 mb-4">
          write me at:
        </div>
        <a
          href="mailto:rkatanic96@gmail.com"
          className="dark:text-gray-200 font-medium text-3xl hover:underline group relative"
        >
          rkatanic96@gmail.com
          <FiArrowUpRight
            className="transition-opacity duration-200 stroke-gray-300 dark:stroke-gray-500 absolute left-full bottom-5 group-hover:opacity-100 opacity-0"
            size="1.25rem"
          />
        </a>
      </div>
      <div>
        <div className="dark:text-gray-300 text-gray-500 mb-4">
          or follow me on:
        </div>
        <div className="flex gap-16">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/rkatanic"
            className="dark:text-gray-200 font-medium text-3xl group hover:underline relative"
          >
            GitHub
            <FiArrowUpRight
              className="transition-opacity duration-200 stroke-gray-300 dark:stroke-gray-500 absolute left-full bottom-5 group-hover:opacity-100 opacity-0"
              size="1.25rem"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/radivoje-katanic"
            className="dark:text-gray-200 font-medium text-3xl group hover:underline relative"
          >
            LinkedIn
            <FiArrowUpRight
              className="transition-opacity duration-200 stroke-gray-300 dark:stroke-gray-500 absolute left-full bottom-5 group-hover:opacity-100 opacity-0"
              size="1.25rem"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
