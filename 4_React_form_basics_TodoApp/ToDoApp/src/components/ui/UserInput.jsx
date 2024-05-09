import React from "react";
import {Input} from "@nextui-org/react";
import AddButton from "./AddButton.jsx";
import {v4 as uuidv4} from "uuid";

export default function UserInput({inputText, setInputText, addTodo}) {

    const onInputChange = (e) => {
        setInputText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;
        addTodo({id: uuidv4(), text: inputText, isComplete: false});
        setInputText('');
    };

    return (
        <form className="p-6 mx-auto w-1/2" onSubmit={onSubmit}>
            <fieldset className="flex gap-4">
                <Input type="text" value={inputText} onChange={onInputChange} placeholder="Create a new To Do..." />
                <AddButton/>
            </fieldset>
        </form>
    );
}
