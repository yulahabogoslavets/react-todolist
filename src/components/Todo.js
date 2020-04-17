import React from "react";
import "../App.css";

import { library} from "@fortawesome/fontawesome-svg-core";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
library.add(faCheck);
library.add(faTrash);



export default (props)=>(
    <div className= {props.todo.complete ? "success-thr" : "todo-item"}>
        <p>
            {props.todo.text}
        </p>

        <div className="todo_element">

        <span onClick={props.toggleComplete} >
           <FontAwesomeIcon icon="check" />
        </span>

        <span onClick={props.onDelete} className="trash">
            <FontAwesomeIcon icon="trash"/>
        </span>
        </div>
    </div>
);