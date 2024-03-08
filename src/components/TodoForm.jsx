import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";

export default function TodoForm() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };
  return (
    <>
      <div className="todo_form">
        <TextField
          onChange={handleChange}
          value={task}
          required
          id="outlined-basic"
          label="add your task"
          variant="outlined"
          sx={{ width: "400px"}}
        />
       
        <Button
          variant="contained"
          color="success"
          sx={{ height: "50px", margin: "4px" }}
          onClick={() =>
            dispatch({
              type: "Add",
              payload: { id: nanoid(), task: task, active : true },
            })
          }
        >
          Add
        </Button>
        
        </div>
    </>
  );
}
