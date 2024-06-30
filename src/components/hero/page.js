import { motion } from "framer-motion";

import Image from "/public/assets/background.jpg";
const Hero = () => {
    return(
        <motion.div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${Image.src})`,
  }}initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ ease: "easeInOut", duration: 0.5 }}
  >

  <div className="hero-overlay bg-opacity-80 bg-black"></div>
  <div className="hero-content text-white text-center">
    <div className="max-w-md gap-8">
      <h1 className="text-5xl font-bold">SIVIL</h1>
      <p>
        <b>SIVIL</b> adalah website digital yang dirancang untuk memfasilitasi konsultasi proyek antara konsultan/kontraktor dengan klien.
      </p>
    </div>
  </div>
</motion.div>
    )
}
export default Hero;