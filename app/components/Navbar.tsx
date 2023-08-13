import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import ThemeToggle from "./ThemeToggle";

const Navbar = async ({}) => {
  return (
    <div className=" fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between ">
      <div className="container max-w-7xl mx-3 lg:mx-auto w-full flex justify-between items-center ">
        <Link href="/" className={buttonVariants({ variant: "link" })}>
          OutBreak 
        </Link> 
        <div className="md:hidden">
          <ThemeToggle />
        </div>
        <div className="hidden md:flex gap-3">
          <ThemeToggle />
          <Link
            href="/documentation"
            className={buttonVariants({ variant: "ghost" })}
          >
            Documentation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
