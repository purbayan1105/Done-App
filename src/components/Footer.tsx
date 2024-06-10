import Link from "next/link";
import { FaGithub, FaGoogleDrive } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="fixed bottom-0 w-full  py-5 dark:bg-[#14142e] shadow-2xl shadow-purple-500 bg-[#cadcff] px-5">
        <div className="grid grid-cols-6">
          <div className="flex justify-end items-center col-span-5 md:col-span-4">
            <div className=" text-sm lg:text-lg dark:text-gray-400 text-black">
              All Copyrights Reserved | ©{" "}
            </div>

            <img src="/sign2.png" alt="" className="w-16 lg:w-32 mr-[25px]" />
          </div>
          <div className="flex md:justify-end  items-center gap-5 col-span-1">
            <div className="">
              <Link href="https://github.com/purbayan1105/Done-App">
                <FaGithub className="" size={20} />
              </Link>
            </div>
            <div className="">
              <Link href="https://drive.google.com/drive/folders/1AGxTsZI0X7DdtaX2uy5Ua7ZU-XIyaJJo">
                <FaGoogleDrive className="" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
