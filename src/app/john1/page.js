"use client";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { IoLogoWhatsapp, IoLogoInstagram, IoMailOutline } from "react-icons/io5";
import Purple from "/public/assets/purple.png";

const Profile = () => {
  return (
    <motion.div className="flex flex-col md:flex-row px-8 py-12 gap-4 items-center" initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}>
        <Image src={Purple} alt="picture" width={500} className="object-cover"/>
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold">John Doe I</p>
          <div className="flex flex-col text-sm gap-2 text-justify">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              egestas lacinia sollicitudin. Sed vulputate non sapien dignissim
              volutpat. Nullam id ligula a velit ultricies fermentum. Nulla
              vulputate turpis elit, faucibus consectetur erat malesuada id. Nunc
              finibus odio sed lacinia vulputate. Pellentesque at est lorem. Sed
              non auctor lacus. Ut semper suscipit turpis vel efficitur.
              Suspendisse efficitur posuere enim sit amet malesuada. Maecenas
              ultricies, massa non pulvinar pharetra, justo odio ullamcorper odio,
              vel congue leo nibh eu ex. Aliquam tortor arcu, tempus in turpis et,
              hendrerit molestie nisl. Maecenas a elementum est. Duis elementum
              lectus id dolor convallis tempor. Praesent lectus libero, fringilla
              a dapibus pretium, mattis sed turpis.
            </p>
            <p>
              Sed condimentum tortor nulla. Nulla sit amet ipsum ultricies,
              volutpat massa mattis, suscipit dui. Aliquam laoreet rhoncus felis.
              Morbi interdum ac tortor ac viverra. Curabitur ultricies eget risus
              nec pharetra. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. In et leo congue,
              venenatis magna vitae, gravida lacus. Mauris tortor dolor,
              consectetur a commodo non, rhoncus at elit.
            </p>
            <p>
              Mauris consequat velit non ante molestie, in feugiat orci ultricies.
              Fusce molestie mi sit amet orci facilisis dictum. Donec cursus
              turpis vel mi iaculis, id porta quam dictum. Praesent molestie justo
              quis lorem laoreet consectetur. Vivamus in aliquam est, a iaculis
              augue. Cras magna lacus, tempor non convallis ut, imperdiet feugiat
              eros. Donec fermentum lacus sed lectus egestas, ac varius nulla
              interdum. Duis a justo a eros tincidunt dignissim. Ut tincidunt urna
              sit amet ante finibus, ut tempus dui euismod. Cras lorem mi,
              hendrerit at consequat ut, varius sagittis elit. Proin imperdiet
              congue mauris, eget fermentum tellus mattis vel. Morbi ipsum lacus,
              semper at ipsum vel, accumsan tristique ipsum. Maecenas urna leo,
              luctus et dignissim et, luctus ut tellus. Nulla sit amet magna id
              nulla maximus congue. Nam eget dolor ullamcorper felis facilisis
              tempus ut eget neque.
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