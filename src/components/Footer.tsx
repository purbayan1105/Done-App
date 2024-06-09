const Footer = () => {
  return (
    <>
      <div className="fixed bottom-0 w-full flex justify-center items-end py-5 dark:bg-[#14142e] shadow-2xl shadow-purple-500 bg-[#fafff4]">
        <div className="flex items-center">
          <div className=" text-sm lg:text-lg text-gray-400">
            All Copyrights Reserved | ©{" "}
          </div>

          <img src="/sign2.png" alt="" className="w-16 lg:w-32 mr-[25px]" />
        </div>
      </div>
    </>
  );
};

export default Footer;
