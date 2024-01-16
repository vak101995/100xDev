import { useState } from "react";

export function CreateTodo(){
    return <div>
        <input type="text" placeholder="title"></input> <br></br>
        <input type="text" placeholder="description"></input><br></br>

        <br></br>
        <button>Add a todo</button>
    </div>
}