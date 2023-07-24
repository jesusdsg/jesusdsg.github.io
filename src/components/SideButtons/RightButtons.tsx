import React from "react";
import { AiOutlineMore } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

export default function RightButtons() {
  return (
    <div className="hidden lg:block fixed right-20 bottom-10">
      <div
        className="grid justify-center items-center gap-4"
        style={montserrat.style}
      >
        <a
          className="cursor-pointer text-gray-500 hover:text-cyan-500 duration-300"
          href="mailto:devjesg@gmail.com"
        >
          <BiMailSend size={"1.6rem"} />
        </a>

        <span
          className="rotate-360 text-gray-500"
          style={{ writingMode: "vertical-rl" }}
        >
          Hire me
        </span>
        <AiOutlineMore size={"1.6rem"} className="text-cyan-500" />
      </div>
    </div>
  );
}
