import DisplayTodo from "@/components/DisplayTodo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TodoForm from "@/components/TodoForm";
const index = () => {
  return (
    <>
      <Navbar />
      <TodoForm />
      <Footer />
    </>
  );
};

export default index;
