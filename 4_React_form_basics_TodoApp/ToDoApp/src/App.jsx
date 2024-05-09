import {Layout} from "./components/ui/Layout.jsx";
import {useState} from "react";
import UserInput from "./components/ui/UserInput.jsx";
import TodoList from "./components/ui/TodoList.jsx";

export default function App() {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState("");

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const removeItem = (id) => {
        setTodos((prev) => prev.filter((value) => value.id !== id));
    };

    const updateTodo = (id, updatedValues) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, ...updatedValues} : todo));
    };

  return (
    <>
        <Layout>
            <div className="flex justify-center">
             <UserInput inputText={inputText} setInputText={setInputText} addTodo={addTodo}/>
            </div>
            <div className="flex items-center justify-center w-full">
                <div className="w-1/2">
                    <TodoList todos={todos} onTodoUpdate={updateTodo} removeItem={removeItem}/>
                </div>
            </div>
        </Layout>
    </>
  );
}

