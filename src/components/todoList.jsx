/* eslint-disable react/prop-types */
import { Box, Flex, Button, Text } from "@chakra-ui/react";
import { removeTodo } from "../redux/todo";

export const TodoList = ({ todos, dispatch }) => {
  return (
    <Box>
      {todos.map((item, idx) => {
        return (
          <Flex key={idx} minW={"100px"} justifyContent={"space-between"} alignItems={"center"} border={"1px solid Highlight"} margin={"10px 0px"} padding={"5px"} borderRadius={"5px"}>
            <Text fontSize={"20px"} color={"black"}>
              {item}
            </Text>
            <Button onClick={() => dispatch(removeTodo(idx))} colorScheme="Highlight" textColor={"Highlight"}>
              Delete
            </Button>
          </Flex>
        );
      })}
    </Box>
  );
};
