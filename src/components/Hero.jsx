import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">SAH</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Experienced Web-developer,focused and determined
            <br className="sm:block hidden" /> to work in all sorts of small to
            large organizations as well
            <br className="sm:block hidden" />
            as apply Web Designing and application development
            <br className="sm:block hidden" />
            experience to deliver quality work.
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
