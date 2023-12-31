'use client'

import ja from "@/shared/ja";
import { todoType } from "@/shared/type";
import { Dispatch, SetStateAction, useState } from "react";
import InputForm from "../inputForm";
import PostButton from "../postButton";
import { v4 } from "uuid";
import { postTodo } from "@/api/todo";
import useSWR,{ mutate, useSWRConfig } from "swr";
import linkName from "@/shared/linkName";
interface props{
    id:string;
}
const TodoInputForm = ({
    id,
}:props) => {
    useSWRConfig();
    const [todo,setTodo]=useState<string>("");
    const onClick=async()=>{
        const uuid:string=v4();
        const setData:todoType={
            id:uuid,
            todo:todo,
            checked:0,
        }
        const data:todoType[]=await postTodo(setData,id);
        mutate(`${linkName.getTodo}${id}`);
        setTodo("");
    };
    return (
        <div>
            <div>
                <InputForm
                    labelName={ja.todo.attribute.todo.labelName}
                    value={todo}
                    setValue={setTodo}
                />
            </div>
            <div>
                <PostButton
                    clickEvent={onClick}
                    buttonTitle={ja.todo.buttonTitle}
                    isDisabled={!todo || /^[\x20\u3000]+$/.test(todo)}
                />
            </div>
        </div>
    );
}

export default TodoInputForm;