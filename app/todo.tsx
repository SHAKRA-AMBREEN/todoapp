"use client";

// import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
// import chakraTheme from '@chakra-ui/theme'
import { Badge, Button, Heading, Spacer, StackDivider } from "@chakra-ui/react";
import { VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon, FaPlusSquare, FaTrash } from "react-icons/fa";
import { HStack, Text, Input } from "@chakra-ui/react";

import React, { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: "Todo App in Nextjs13 using chakraUI", completed: true },
    { todoText: "PricingUI in Nextjs", completed: true },
    { todoText: "React & nextjs tutorials ", completed: false },
    { todoText: "Big Projects", completed: true },
    { todoText: "Figma UI/UX Projects", completed: false },
  ]);

  const onClickHandler = (myelm: any) => {
    console.log("myelm", myelm);

    //map runs on array and returns an array
    const newTodos = todos.map((todo) => {
      console.log("todo: ", todo);
      if (todo.todoText == myelm.todoText) {
        todo.completed = !todo.completed; // false become true and true become false
      }
      return todo;
    });
    console.log(newTodos);
    setTodos(newTodos);
  };
  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo(" ");
  };

  const deleteTodo = (myTodo: any) => {
    const newTodos = todos.filter((todo) => {
      if (todo.todoText == myTodo.todoText) return false;
      return true;
    });

    console.log("old todos", todos, "newtodos", newTodos);
    setTodos(newTodos);
  };

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <VStack
        p={4}
        bgColor={""}
        divider={<StackDivider />}
        borderColor="pink.200"
        borderWidth="2px"
        m="4"
        borderRadius="lg"
        width={"lg:100%"}
        maxW={{ base: "100vw", sm: "100v%", lg: "100vw", xl: "100vw" }}
        alignItems="stretch"
      >
        {/* <div> <h1> Todo Application </h1></div> */}

        <IconButton
          icon={<FaSun />}
          isRound={true}
          size="lg"
          bgColor={"lightpink"}
          alignSelf="flex-end"
          onClick={toggleColorMode}
          bgGradient="linear(to bottom right, #0100EC, #FB36F4)"
          aria-label={""}
        />
        <HStack>
          <Heading
            mb={{lg:"8", base: "3"}}
            fontWeight="extrabold"
            size={{ lg: "2xl", md:"2xl", base: "md" }}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            alignItems="center"
          >
            Todo Application
          </Heading>
          <Spacer />
          <Input
            variant="filled"
            placeholder="add todo items"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
            width={{ lg: "800px", base: "200px" }}
            fontSize={{lg:"100%", base: "8px"}}
          />

          <Spacer />
          <Button
            onClick={addTodo}
            colorScheme="pink"
            width={{ lg: "200px", base: "60px" }}
            fontSize={{lg:"100%", base:"8px"}}
          >
            {" "}
            Add Todo{" "}
          </Button>
        </HStack>

        <VStack
          divider={<StackDivider />}
          p="4"
          m="2"
          width={"lg:100%"}
          maxW={{ base: "90vw", sm: "100%", lg: "100%" }}
          alignItems="stretch"
          bgGradient=""
          fontSize={{xl:"40px", lg:"30px", md:"20px",base:"15px"}}
        >
          <ul>
            {todos.map((elm: any) => {
              return (
                <li
                  style={{
                    color: elm.completed ? "black" : "red",
                    fontStyle: "obligue",
                    listStyle: "none",
                    padding: "5px",
                  }}
                  key={elm.todoText}
                >
                  <HStack>
                    <>
                      <input
                        type="checkbox"
                        checked={elm.completed}
                        onChange={() => {
                          onClickHandler(elm);
                        }}
                      />
                      {elm.todoText}

                      <Spacer />

                      <IconButton
                        icon={<FaTrash />}
                        ml="10"
                        isRound={true}
                        onClick={() => {
                          deleteTodo(elm);
                        }}
                        aria-label={""}
                      >
                        {" "}
                        {}{" "}
                      </IconButton>
                    </>
                  </HStack>
                </li>
              );
            })}
          </ul>
        </VStack>
      </VStack>
    </>
  );
}
