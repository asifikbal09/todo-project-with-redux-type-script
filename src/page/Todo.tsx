import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";



const Todo = () => {
  return (
    <Container>
      <div>
        <h1 className="text-center font-semibold text-3xl">My todo</h1>
        <TodoContainer></TodoContainer>
      </div>
    </Container>
  );
};

export default Todo;
