import Link from "next/link";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const Slider = () => {
  return (
    <Link href="projects/markdown-editor">
      <div className="relative text-white max-w-[24rem] flex-1">
        <div className="shader  max-w-[24rem] h-[32rem] border-2 border-gray-800"></div>
        <motion.div
          exit={{ opacity: 0 }}
          transition={transition}
          className="information"
        >
          <div className="absolute w-full flex gap-4 justify-between mt-4">
            <div>JOHN DOE</div>
            <div>28.538336-81.379234</div>
          </div>
        </motion.div>
      </div>
    </Link>
  );
};

export default Slider;
