import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { ObjProps } from "./components/TodoForm";

export const darkAtom = atomWithStorage("dark-mode-toggle", true);
export const listAtom = atomWithStorage<ObjProps[]>("my-to-do-list", []);
export const inputAtom = atom("");
