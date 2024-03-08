import * as React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { useDispatch, useSelector } from "react-redux";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

export default function Todotasks({ task, id, active }) {
  const [updateState, setUpdateState] = useState(true);
  const [updateValue, setUpdateValue] = useState(task);
  const [activeTask, setActiveTask] = useState(active);
  const displayData = useSelector((state) => state.displaytask);
  const dispatch = useDispatch();

  const handelClick = () => [setUpdateState((prev) => !prev)];
  const handleChange = (event) => {
    setUpdateValue(event.target.value);
    dispatch({ type: "update", payload: { id: id, task: event.target.value } });
  };

  // const handelClickInputTab = () => {
  //   console.log("hello");
  // };
  return (
    <>
      <div className="todotasks">
        <Paper
          component="form"
          sx={
            activeTask
              ? {
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 480,
                }
              : {
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 480,
                  backgroundColor: "rgb(240, 179, 179)",
                }
          }
        >
          <InputBase
            disabled={updateState}
            onChange={handleChange}
            sx={{ ml: 1, flex: 1 }}
            value={updateValue}
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="Delete"
            onClick={() => {
              setActiveTask((prev) => !prev);
              dispatch({ type: "active", payload: id });
            }}
          >
            {activeTask ? <DoneIcon /> : <CloseIcon />}
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="Delete"
            onClick={() => dispatch({ type: "delete", payload: id })}
          >
            <DeleteIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="Update"
            onClick={handelClick}
          >
            <ChangeCircleIcon />
          </IconButton>
        </Paper>
      </div>
    </>
  );
}
