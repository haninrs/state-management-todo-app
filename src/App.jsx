import "./App.css";
import { Box, Flex, Input, Button, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodo } from "./redux/todo";
import { TodoList } from "./components/todoList";

function App() {
  const todos = useSelector((state) => state.todoList.value);
  const todoRef = useRef();
  const dispatch = useDispatch();

  const onAdd = () => {
    const data = todoRef.current.value;
    if (data == "") {
      alert("Gak Boleh Kosong oi!😺");
    } else {
      dispatch(addTodo(data));
      todoRef.current.value = "";
    }
  };
  return (
    <>
      <Box height={"100vh"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
        <Text fontSize={"48px"} fontWeight={"bold"} color={"Highlight"}>
          Todo List
        </Text>
        <Flex gap={2}>
          <Input ref={todoRef} type="text" placeholder="Add your todo" />
          <Button onClick={onAdd} colorScheme="Highlight" textColor={"Highlight"}>
            Add
          </Button>
        </Flex>
        <TodoList todos={todos} dispatch={dispatch} />
      </Box>
    </>
  );
}

export default App;
