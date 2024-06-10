const Datetime = () => {
  let date = new Date();

  let splitDate = date.toString().split(" ") as string[];
  console.log(splitDate);
  let todayDate = (splitDate[0] +
    " " +
    splitDate[1] +
    " " +
    splitDate[2] +
    ", " +
    splitDate[3]) as string;

  return (
    <>
      <div className="ml-5 py-5 quicksand text-xl">{todayDate}</div>
    </>
  );
};

export default Datetime;
