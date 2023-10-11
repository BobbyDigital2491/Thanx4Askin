import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import AboutUs from "./AboutUs";

function Section({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { ref: refInView, inView } = useInView();

  return (
    <section ref={ref}>
      <div
        className={`transition-opacity ${
          inView ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
        } ease-in-out duration-900 delay-500`}
        ref={refInView}
      >
        {children}
      </div>
    </section>
  );
}

export default function Framer() {
  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center">
      <div className="">
        <Section children={undefined}></Section>
        
      </div>
    </div>
  );
}
