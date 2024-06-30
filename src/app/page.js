"use client";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import Hero from "@/components/hero/page";

import data from "./data";

export default function Home() {
  return (
    <>
    <Hero/>
    <div className="min-h-screen px-4 py-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
      {data.map((data, i) => (
        <motion.div
          key={data.id}
          className="flex flex-col justify-center items-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: i * 0.5 }}
          >
          <p className="text-2xl font-bold">{data.name}</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "tween", stiffness: 400, damping: 10 }}
          >
            <Link href={data.link}>
              <Image src={data.photo} alt={data.name} width={250} />
            </Link>
          </motion.div>
          <p className="text-sm text-center">{data.desc}</p>
        </motion.div>
      ))}
    </div>
      </>
  );
}
