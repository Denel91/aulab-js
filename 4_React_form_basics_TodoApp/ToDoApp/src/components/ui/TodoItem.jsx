import DeleteButton from "./DeleteButton.jsx";
import TodoText from "./TodoText.jsx";
import StatusCheckbox from "./StatusCheckbox.jsx";

export default function TodoItem({id, text, isComplete, updateTodo, removeItem}) {
    return(
        <article className="flex justify-between p-4 max-w-7xl border-1 border-gray-300 rounded-2xl">
            <StatusCheckbox isComplete={isComplete} onChange={() => updateTodo(id, {isComplete: !isComplete})}/>
            <div className="w-full pl-4">
                <div className="flex items-center justify-between">
                    <TodoText isComplete={isComplete} text={text}/>
                    <DeleteButton onClick={() => removeItem(id)} />
                </div>
            </div>
        </article>
    );
}

