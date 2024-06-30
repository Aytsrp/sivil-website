"use client";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { IoLogoWhatsapp, IoLogoInstagram, IoMailOutline } from "react-icons/io5";
import Adhi from "/public/assets/adhi.png";

const Profile = () => {
  return (
    <motion.div className="flex flex-col lg:flex-row px-8 py-8 gap-4 items-center md:items-start" initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}>
        <Image src={Adhi} alt="picture" width={500} className="object-cover"/>
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold">PT Adhi Karya (Persero) Tbk (ADHI)</p>
          <div className="flex flex-col text-sm gap-2 text-justify">
            <p>
              Adhi Karya bergerak di sektor konstruksi, EPC (Engineering Procurement, Construction), dan investasi. Proyek terkenal mereka termasuk pembangunan LRT Jabodetabek. Rating 4,5/5
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Link className="btn btn-success text-base-100 text-base" href="https://wa.link/a8h9bj">
            <IoLogoWhatsapp/>
              Whatsapp
            </Link>
            <Link className="btn btn-info text-base-100 text-base" href="https://ig.me/m/ranu.aleale">
            <IoLogoInstagram/>
              Instagram
            </Link>
            <Link className="btn btn-warning text-base-100 text-base" href="https://mail.google.com/mail/?view=cm&fs=1&to=ranukekeaja@gmail.com&su=Howdy!&body=Hello%20Ranu%20%F0%9F%91%8B%0AI%20loved%20to%20work%20with%20you!">
            <IoMailOutline/>
              Email
            </Link>
          </div>
        </div>
      </motion.div>
  );
};
export default Profile;