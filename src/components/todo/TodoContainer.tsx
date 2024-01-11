
import AddTodoModal from "./AddTodoModal";
import TodoCart from "./TodoCart";
import TodoFilter from "./todoFilter";


const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between w-full p-5">
        
        <AddTodoModal></AddTodoModal>
       
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] space-y-3">
        <div className="bg-white space-y-5 rounded-md p-3">
          <TodoCart></TodoCart>
          <TodoCart></TodoCart>
          <TodoCart></TodoCart>
          <TodoCart></TodoCart>
        </div>
        {/* <div className="bg-white p-5 flex justify-center items-center rounded-md">
                <p className="text-3xl font-bold">There is no task pending.</p>
              </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
