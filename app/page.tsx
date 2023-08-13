import Image from "next/image";
import Link from "next/link";
import LargeHeading from "./components/ui/LargeHeading";
import Paragraph from "./components/ui/Paragraph";
import "./globals.css";

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      {/* <div className="container pt-32 lg:max-w-7xl sm:max-w-5xl w-full mx-auto h-full"> */}
      <div className="container pt-32 max-w-7xl w-full mx-auto h-full">
        <div className="h-full gap-6 mx-3 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading
            size="lg"
            className="three-d text-black sm:text-center dark:text-light-gold"
          >
            Hello, I am Nikhil
          </LargeHeading>

          <Paragraph className="max-w-3xl lg:text-left sm:max-w-xl">
            and I am delighted to welcome you to my personal website. This is
            where my simple knowledge to many other language. while i am
            immersed in lines of code or pixels on a screen, you will often find
            me on &nbsp;
            <Link
              href="https://github.com/OutBreak778"
              className="underline underline-offset-2 text-black dark:text-light-gold"
            >
              GitHub
            </Link>
            , &nbsp;
            <Link
              href="https://codepen.io/OutBreak778"
              className="underline underline-offset-2 text-black dark:text-light-gold"
            >
              Codepen
            </Link>
            , &nbsp;
            <Link
              href="https://dribbble.com/OutBreak778"
              className="underline underline-offset-2 text-black dark:text-light-gold"
            >
              Dribble
            </Link>
            , &nbsp;
            <Link
              href="https://www.codechef.com/users/nikhil913750"
              className="underline underline-offset-2 text-black dark:text-light-gold"
            >
              Codechef
            </Link>
            , and many other places. Recently i am starting to get interested in
            playing chess. These experiences fuel my creativity and provide a
            fresh perspective that enriches my work. Through this website, I aim
            to share my journey, insights, and creations with you. This is
            simple project where you can see how many languages i have learnt so
            far and i have still not included my other languages.
          </Paragraph>

          <div className="relative cmpImage w-full max-w-xl md:w-xl lg:max-w-md lg:mr-[80px] sm:right-[-10px] aspect-square lg:absolute">
            <Image
              priority
              quality={100}
              style={{ objectFit: "scale-down" }}
              fill
              src="/codewp_platform_q2_23-1024x920.webp"
              alt="Code"
            />
            <div className="w-14 md:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
}
