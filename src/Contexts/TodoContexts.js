import React from "react";
import { useContext,  createContext} from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: " Todo Msg ",
      completed: false,
    },
  ],

  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext();
};

export const TodoProvider = TodoContext.Provider;
