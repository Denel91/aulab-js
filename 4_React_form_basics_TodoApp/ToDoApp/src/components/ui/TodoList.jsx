import TodoItem from "./TodoItem.jsx";

export default function TodoList({todos, onTodoUpdate, removeItem}) {
    return (
            <ul className="list-none list-inside grid gap-4">
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <TodoItem {...todo} updateTodo={onTodoUpdate} removeItem={removeItem}/>
                    </li>
                ))}
            </ul>
    );
}
