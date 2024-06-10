import { darkAtom } from "@/atoms";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {
  const [dark, setDark] = useAtom(darkAtom);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <div className="grid grid-cols-5 items-center py-2 px-5 lg:px-10 dark:bg-[#13132d] dark:drop-shadow-2xl shadow-indigo-500 bg-[#fafff4]">
        <div className="col-span-4 text-center text-3xl md:text-4xl lg:text-5xl font-semibold pl-12 lg:pl-64">
          <img
            src="/logo (2).png"
            alt=""
            className="w-56 md:w-64 flex justify-center"
          />
        </div>
        <div className="flex justify-end">
          {dark ? (
            <FiSun onClick={() => setDark(!dark)} size={30} color="yellow" />
          ) : (
            <FiMoon onClick={() => setDark(!dark)} size={30} color="blue" />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
