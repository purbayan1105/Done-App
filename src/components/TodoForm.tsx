import { inputAtom, listAtom } from "@/atoms";
import { useAtom } from "jotai";
import { v4 as uuidv4 } from "uuid";
import DisplayTodo from "./DisplayTodo";
import { BiCheck } from "react-icons/bi";
import { useState } from "react";

export type ObjProps = {
  id: string;
  item: string;
  isDone: boolean;
};
export type ArrayProps = {
  ls: ObjProps[];
};
const TodoForm = () => {
  const [input, setInput] = useAtom(inputAtom);
  const [ls, setLs] = useAtom<ObjProps[]>(listAtom);
  const [isClicked, setClicked] = useState(false);

  const addToDo = (input: string) => {
    if (input !== "") {
      setLs([...ls, { id: uuidv4(), item: input, isDone: false }]);
      console.log(ls);
      setInput("");
    } else {
      alert("Please add something to input");
    }
  };

  return (
    <>
      <div className="flex justify-center mt-5 items-center mx-5 quicksand">
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center border-2 border-solid dark:border-indigo-500 border-green-400 rounded-lg lg:w-[600px]">
          <input
            type="text"
            className="bg-transparent outline-none border-none px-5 col-span-2 lg:col-span-3"
            onChange={(e: any) => {
              setInput(e.target.value);
              // console.log(e.target.value);
            }}
            value={input}
            placeholder="Add your list here..."
          />

          <div
            className="dark:bg-indigo-500 bg-green-400 flex justify-center border-2 border-solid dark:border-indigo-500 border-green-400"
            onClick={(e: any) => addToDo(input)}>
            <button className="rounded-r-lg py-3">Add To Do</button>
          </div>
        </div>
      </div>
      {/* {isClicked && (
        <div className="flex justify-center items-center">
          <div className="dark:bg-black bg-gray-200 flex items-center gap-2 py-2 px-3 rounded-lg absolute z-10">
            <div className="bg-green-400 rounded-full h-5 w-5 flex justify-center items-center">
              <BiCheck />
            </div>
            <div className="">Successfully Added</div>
          </div>
        </div>
      )} */}

      <div className="pb-24 md:pb-36">
        {ls.map((todo) => {
          return <>{<DisplayTodo key={todo.id} todo={todo} />}</>;
        })}
      </div>
    </>
  );
};

export default TodoForm;
