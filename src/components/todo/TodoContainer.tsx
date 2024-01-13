import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCart from "./TodoCart";
import TodoFilter from "./TodoFilter";


const TodoContainer = () => {

  //using local state
  const {todos} = useAppSelector(state=>state.todos)

  //get data from remote
  // const { isError,isLoading,data}=useGetTodoQuery(undefined)
  // if(isLoading){
  //   return (<div>Loading...</div>)
  // }
  // const todos = data.data

  return (
    <div>
      <div className="flex justify-between w-full p-5">
        
        <AddTodoModal></AddTodoModal>
       
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] space-y-3">
        <div className="bg-white space-y-5 rounded-md p-3">
        { todos?.map( item=><TodoCart key={item.id} {...item}></TodoCart>)}
        </div>
        {/* <div className="bg-white p-5 flex justify-center items-center rounded-md">
                <p className="text-3xl font-bold">There is no task pending.</p>
              </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
