import { darkAtom, listAtom } from "@/atoms";
import { useAtom } from "jotai";
import { BiCheck } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { ObjProps } from "./TodoForm";
import { useState } from "react";

type ObjectType = {
  todo: {
    id: string;
    item: string;
    isDone: boolean;
  };
  key: string;
};

const DisplayTodo = ({ todo }: ObjectType) => {
  const [ls, setLs] = useAtom<ObjProps[]>(listAtom);
  const [dark, setDark] = useAtom(darkAtom);

  //   const [isComplete, setComplete] = useState(false);

  const toggleComplete = (key: string) => {
    // setComplete(!isComplete);
    setLs(
      ls.map((todo) =>
        todo.id === key ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const deleteTodo = (key: string) =>
    setLs(ls.filter((todo) => todo.id !== key));
  return (
    <>
      <div className="flex justify-center items-center mx-5 mt-8 dark:text-white quicksand">
        <div className="w-80 h-auto py-3 lg:w-[600px] dark:bg-indigo-500 rounded-lg bg-green-300 ">
          <div className="grid grid-cols-6 items-center mx-3">
            <div
              className={`col-span-1 flex items-start ${
                dark
                  ? todo.isDone
                    ? "text-green-500"
                    : ""
                  : todo.isDone
                  ? "text-yellow-500"
                  : ""
              }`}>
              <FaCheckCircle
                size={25}
                className="flex items-center"
                onClick={() => toggleComplete(todo.id)}
              />
            </div>
            <div className={`col-span-4 ${todo.isDone ? "line-through" : ""}`}>
              {todo.item}
            </div>
            <div className="col-span-1 flex items-center justify-end">
              <MdDelete
                size={30}
                className=""
                onClick={() => deleteTodo(todo.id)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayTodo;
